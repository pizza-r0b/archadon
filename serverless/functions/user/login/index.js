'use strict';

import comparePassword from 'utils/comparePassword';
import createJwt from 'utils/createJwt';
import corsRes from 'utils/corsRes';
import connect from 'utils/mongoConnect';
import { UserItem } from 'schemas/User';


async function _login(event, context, callback) {
  let data;

  // try catch for testing, body is JSON when actually on AWS
  // but not JSON when testing locally
  try {
    data = JSON.parse(event.body);
  } catch (e) {
    data = event.body;
  }

  const email = data.email;
  const password = data.password;
  if (!email || !password) {
    callback(null, corsRes({ statusCode: 400, body: JSON.stringify({ code: 400, message: 'Bad request' }) }));
    return;
  }

  let user;
  try {
    user = await UserItem.findOne({ Email: email }).exec();
  } catch (e) {
    return callback(null, corsRes({ statusCode: 500, body: JSON.stringify({ error: e }) }));
  }
  if (user) {
    const hash = user.get('Password');
    const ID = user.get('_id');
    console.log(password);
    const isMatch = comparePassword(password, hash);
    if (isMatch) {
      const token = createJwt({ ID });
      const response = corsRes({
        statusCode: 200,
        body: JSON.stringify({ authToken: token, ID }),
      });
      callback(null, response);
    } else {
      callback(null, corsRes({ statusCode: 401 }));
    }
  } else {
    callback(null, corsRes({ statusCode: 404 }));
  }
}

export const login = connect(_login);
