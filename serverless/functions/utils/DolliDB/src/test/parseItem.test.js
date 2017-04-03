import { assert } from 'chai';
import { parseItem, generateItem } from '../index';

describe('parseItem', () => {
  it('takes a DolliDB Item and returns a JS Object', () => {
    const originalObject = {
      ItemID: 1,
      Email: 'chester@example.com',
      Password: 'something',
      Address: {
        Street1: '1925 Jefferson',
        Zip: 94123,
      },
      Foo: {
        Bar: {
          MyArray: [
            1,
            2,
            3,
            {
              Foo: 'Bar',
              Hello: {
                World: ':)',
                arr: [
                  1,
                  2,
                  {
                    a: 1,
                    b: 2,
                  },
                ],
              },
            },
          ],
        },
      },
    };

    const p1 = Date.now();
    const generatedItem = generateItem(originalObject, ['Email']);
    console.log(`TOOK ${Date.now() - p1}ms to generate the item`);

    const p2 = Date.now();
    const parsedItem = parseItem(generatedItem);
    console.log(`TOOK ${Date.now() - p2}ms to parse the item`);

    assert.deepEqual(parsedItem, originalObject);
  });
});
