import { expect } from 'chai';
import { generateItem } from '../index';

describe('DolliDB', () => {
  describe('generateItem', () => {
    it('takes an object and returns a DolliDb Item', () => {
      const input = {
        ItemID: '1234',
        Email: 'chester@example.com',

        Address: {
          Street1: '1925 Jefferson St',
          Street2: '202',
          Entities: {
            One: {
              Two: {
                Three: 'Foo',
              },
            },
          },
        },

        Images: ['One', 'Two', {
          Path: '/',
          Src: 'image.jpg',
        }],
        Name: 'Sean',
      };

      const output = generateItem(input, ['Email']);

      const AddressID = output['Root:Address:Object'];
      const ImagesID = output['Root:Images:Array'];
      const EntitiesID = output[`${AddressID}:Entities:Object`];
      const OneID = output[`${EntitiesID}:One:Object`];
      const TwoID = output[`${OneID}:Two:Object`];
      const ImageObjectID = output[`${ImagesID}:2:Object`];

      expect(output).to.deep.equal({
        ItemID: '1234',
        Email: 'chester@example.com',
        'Root:Address:Object': AddressID,
        [`${AddressID}:Street1:String`]: '1925 Jefferson St',
        [`${AddressID}:Street2:String`]: '202',
        [`${AddressID}:Entities:Object`]: EntitiesID,
        [`${EntitiesID}:One:Object`]: OneID,
        [`${OneID}:Two:Object`]: TwoID,
        [`${TwoID}:Three:String`]: 'Foo',
        'Root:Images:Array': ImagesID,
        [`${ImagesID}:0:String`]: 'One',
        [`${ImagesID}:1:String`]: 'Two',
        [`${ImagesID}:2:Object`]: ImageObjectID,
        [`${ImageObjectID}:Path:String`]: '/',
        [`${ImageObjectID}:Src:String`]: 'image.jpg',
        'Root:Name:String': 'Sean',
      });
    });
  });
});
