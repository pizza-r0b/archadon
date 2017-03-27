'use strict';

const putItem = require('./putItem');

const table = process.env.USER_PROFILE_TABLE;
const PutUserProfile = putItem(table);

function createUserProfile(ID) {
  return PutUserProfile({
    Item: {
      UserID: ID,
    },
  });
}

module.exports = createUserProfile;
