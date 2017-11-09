import createJwt from 'utils/createJwt';
import corsRes from 'utils/corsRes';
import sendMail from 'utils/sendMail';
import connect from 'utils/mongoConnect';
import { UserItem } from 'schemas/User';

function getRest(...args) {
  const data = args[args.length - 1];
  const out = {};
  const keys = Object.keys(data).filter(key => args.indexOf(key) === -1);
  keys.forEach(key => {
    out[key] = data[key];
  });

  return out;
}

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
  const { email: Email, password: Password } = data;
  const rest = getRest('email', 'password', data);

  // TODO: Add email validation
  if (!Email || !Password) {
    callback(null, corsRes({
      statusCode: 400,
    }));
    return;
  }

  let _id;

  try {
    const doc = await UserItem.findOne({ Email }).exec();
    if (doc) {
      throw new Error('User already exists');
    }

    const userItem = new UserItem({
      Email,
      Password,
    });

    const savedDoc = await userItem.save();

    _id = savedDoc.get('_id');

    // if (Object.keys(rest).length > 0) {
    //   const userData = toPaths(rest).map(([Path, Value]) => ({ Path, Value, Item: _id }));
    //   await UserData.insertMany(userData);
    // }

    const token = createJwt({ ID: _id });
    await onUserCreate(Email);
    callback(null, corsRes({
      statusCode: 200,
      body: JSON.stringify({ authToken: token, ID: _id }),
    }));
  } catch (e) {
    callback(null, corsRes({
      statusCode: 409,
      body: JSON.stringify({ error: e.message }),
    }));
  }
}

function onUserCreate(email) {
  return sendMail({
    to: email,
    subject: '❤️😁 Rugs await!! Your New Archadon.com Account 🙌',
    template: 'new-user',
    from: 'welcome@archadon.com',
    context: {
      email,
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

export const createUser = connect(_createUser);
export { onUserCreate };
