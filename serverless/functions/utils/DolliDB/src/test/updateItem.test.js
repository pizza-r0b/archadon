import { expect } from 'chai';
import { updateItem } from '../index';

describe('updateItem', () => {
  it('updates an item and returns the correct values', () => {
    const originalObject = {
      Address: {
        Street1: '1925 Jefferson St',
        Street2: '202',
      },
    };

    const updates = {
      Address: {
        Zip: '94123',
      },
    };


  });
});
