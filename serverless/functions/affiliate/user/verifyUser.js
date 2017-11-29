import corsRes from 'utils/corsRes';
import sendMail from 'utils/sendMail';
import connect from 'utils/mongoConnect';
import { AffiliateUserItem } from 'schemas/AffiliateUser';
import uuid from 'uuid/v4';

async function _createUser(event, context, callback) {
  if (event.source === 'cloudwatch-event') {
    return callback();
  }

  let data;
  try {
    data = JSON.parse(event.body);
  } catch (e) {
    data = event.body;
  }
  const { email: Email } = data;

  if (!emailRegex.test(Email)) {
    callback(null, corsRes({
      statusCode: 400,
    }));
    return;
  }

  let _id;

  try {
    const doc = await AffiliateUserItem.findOne({ Email }).exec();
    if (doc) {
      throw new Error('User already exists');
    }

    const verificationUID = uuid();

    const userItem = new AffiliateUserItem({
      Email,
      VerificationUID: verificationUID,
      VerificationUIDCreation: new Date,
    });

    const savedDoc = await userItem.save();

    await onUserCreate(Email, verificationUID);

    callback(null, corsRes({
      statusCode: 200,
    }));
  } catch (e) {
    callback(null, corsRes({
      statusCode: 409,
      body: JSON.stringify({ error: e.message }),
    }));
  }
}

function onUserCreate(email, verificationUID) {
  return sendMail({
    to: email,
    subject: 'Welcome to the Archadon Affiliate Program!😁🙌',
    template: 'new-affiliate-user',
    from: 'affiliates@archadon.com',
    context: {
      verificationUID
    },
  }).then(info => {
    console.log('New User Created');
    console.log(info);
    return Promise.resolve();
  }).catch(err => {
    console.log('New User Error');
    return Promise.reject(err);
  });
}

export const createAffiliateUser = connect(_createUser);
