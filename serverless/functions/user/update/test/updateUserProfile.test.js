'use strict';

const updateUserProfile = require('../updateUserProfile');
const getExpressionValues = updateUserProfile.getExpressionValues;
const getUpdateQueryFromData = updateUserProfile.getUpdateQueryFromData;

describe('updateUserProfile', () => {
  describe('getExpressionValues', () => {
    it('returns a list of tuples containing expression attribute names, values, and an update expression', done => {
      const data = {
        "Address": {
          "Street1": "1925 Jefferson St",
          "Street2": "202",
          "City": "SF",
          "State": "CA",
          "Zip": "94123"
        },
        "SomeOtherStuff": {
          "Dog": "Harley"
        }
      }

      getUpdateQueryFromData(data, 'ID', '1234');

      done();
    });
  });
});
