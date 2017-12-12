import connect from 'utils/mongoConnect';
import addCors from 'utils/corsRes';
import Lead from 'schemas/Lead';
import index from 'utils/algolia';

async function _getSavedLead(event, context, callback) {
  if (event.source === 'cloudwatch-event') {
    return callback();
  }

  let data;
  try {
    data = JSON.parse(event.body);
  } catch (e) {
    data = event.body;
  }

  if (!data) {
    callback(null, addCors({
      statusCode: 400,
    }));
    return;
  }

  const { id } = data;

  if (!id) {
    callback(null, addCors({
      statusCode: 400,
    }));
    return;
  }

  let lead;

  try {
    lead = await Lead.findById(id).lean().exec();
  } catch (e) {
    console.log(e);
    callback(null, addCors({
      statusCode: 500,
    }));
  }

  if (!lead) {
    callback(null, addCors({
      statusCode: 404,
    }));
    return;
  }

  index.search({
    filters: `Qty > 0 AND ${lead.filters}`,
    hitsPerPage: 100,
  }, (err, content) => {
    callback(null, addCors({
      statusCode: 200,
      body: JSON.stringify({
        results: content,
        colors: lead.colors,
        filters: lead.filters,
      }),
    }));
  });
}

export default connect(_getSavedLead);
