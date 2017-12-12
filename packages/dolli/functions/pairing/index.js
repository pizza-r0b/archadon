import index from 'utils/algolia';
import getColors from 'get-image-colors';
import connect from 'utils/mongoConnect';
import addCors from 'utils/corsRes';
import uuid from 'uuid/v4';
import AWS from 'aws-sdk';
import _colors from '../../../../scripts/colors';
import _nearestColor from 'nearest-color';
import ColorScheme from 'color-scheme';

const colors = _colors.map(color => color.hex);
const nearestColor = _nearestColor.from(colors);

const s3 = new AWS.S3({ computeChecksums: false });

const params = key => ({
  Bucket: 'archadon-user',
  Key: key,
});

const getObject = key => new Promise((resolve, reject) => {
  s3.getObject(params(key), (err, data) => {
    if (err) {
      return reject(err);
    }
    resolve(data.Body);
  });
});

async function _pair(event, context, callback) {
  if (event.source === 'cloudwatch-event') {
    return callback();
  }

  event.body = event.body || {};

  let data;

  try {
    data = JSON.parse(event.body);
  } catch (e) {
    data = event.body;
  }

  const { filePath, gallery, mimeType } = data;

  if (!filePath || !mimeType || gallery === void 0) {
    callback(null, addCors({
      statusCode: 400,
    }));
    return;
  }

  const buffer = await getObject(filePath);

  const colorsFromBuffer = await getColors(buffer, mimeType);
  const [mainColor] = colorsFromBuffer;


  const scheme = new ColorScheme();
  const scm = scheme
    .from_hex(mainColor.hex().replace('#', ''))
    .scheme('contrast')
    .colors();

  const query = scm.map(color => nearestColor(`#${color}`)).map(color => `Colors:${color}`).join(' OR ');

  index.search({
    filters: `Qty > 0 AND ${query}`,
    hitsPerPage: 100,
  }, (err, content) => {
    if (err) {
      callback(null, addCors({
        statusCode: 400,
        body: JSON.stringify({
          err,
        }),
      }));
      return;
    }
    callback(null, addCors({
      statusCode: 200,
      body: JSON.stringify({
        results: content,
        colors: scm,
        filters: query,
      }),
    }));
  });
}

export function getSignedUrl(event, context, callback) {
  if (event.source === 'cloudwatch-event') {
    return callback();
  }

  event.body = event.body || {};
  let data;
  try {
    data = JSON.parse(event.body);
  } catch (e) {
    data = event.body;
  }
  const TYPE_WHITE_LIST = ['image/jpeg', 'image/png', 'image/jpeg', 'image/gif'];
  const { fileExt, fileType } = data;
  if (!fileExt || !fileType || !TYPE_WHITE_LIST.includes(fileType)) {
    callback(null, addCors({
      statusCode: 400,
      body: JSON.stringify(event),
    }));
    return;
  }
  const fileName = `promo/pair/${uuid()}.${fileExt}`;
  const s3Params = {
    Bucket: 'archadon-user',
    Key: fileName,
    ACL: 'public-read',
    ContentType: fileType,
    Expires: 120,
  };

  s3.getSignedUrl('putObject', s3Params, (err, url) => {
    if (err) {
      callback(null, addCors({
        statusCode: 500,
        body: JSON.stringify(err),
      }));
    } else {
      callback(null, addCors({
        statusCode: 200,
        body: JSON.stringify({
          fileName,
          url,
        }),
      }));
    }
  });
}

export const pair = connect(_pair);
