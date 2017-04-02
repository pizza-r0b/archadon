import { expect } from 'chai';
import { parseItem, generateItem } from '../index';

describe('parseItem', () => {
  it('takes a DolliDB Item and returns a JS Object', () => {
    const originalObject = {
      Password: 'hi',
      Address: {
        Street1: '1925 Jefferson St',
        Street2: '202',
        Images: ['1', 2, { yo: 'a', b: ['something'] }],
        Foo: {
          Bar: '1',
          1: {
            'hey': {
              'you': {
                'how': {
                  'you': {
                    'doing': {
                      answer: 'good',
                      deeepArray: [1, 2, 3, {
                        deep: {
                          real: {
                            deep: {
                              bar: 1
                            }
                          }
                        }
                      }]
                    }
                  }
                }
              }
            }
          }
        },
      },
    };

    const generatedItem = generateItem(originalObject);
    const parsedItem = parseItem(generatedItem);

    console.log(JSON.stringify(parsedItem));

  });
});
