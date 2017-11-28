export const IMAGE_ORIGIN = 'https://assets.archadon.com';

export const DEFAULT_ITEM = {
  Images: [],
  Height: '',
  Width: '',
  Price: 0,
  Name: '',
  LongDescription: '',
  ShortDescription: '',
  SKU: '',
};

export const FILTERS_ARR = [
  {
    name: 'Sort',
    options: [
      {
        copy: 'Price: Highest to Lowest',
        queries: ['product_desc'],
        type: 'r',
      },
      {
        copy: 'Price: Lowest to Highest',
        queries: ['product_asc'],
        type: 'r',
      },
    ],
  },
  // {
  //   name: 'Price',
  //   options: [
  //     {
  //       copy: 'Under $80',
  //       queries: ['< 80'],
  //       type: 'p',
  //     },
  //     {
  //       copy: '$80 - $150',
  //       queries: ['>= 80', '<= 150'],
  //       type: 'p',
  //     },
  //     {
  //       copy: '$150 - $300',
  //       queries: ['>= 150', '<= 300'],
  //       type: 'p',
  //     },
  //     {
  //       copy: '$300 - $800',
  //       queries: ['>= 300', '<= 800'],
  //       type: 'p',
  //     },
  //     {
  //       copy: '$800+',
  //       queries: ['>= 800'],
  //       type: 'p',
  //     },
  //   ],
  // },
  {
    name: 'Size',
    options: [
      {
        copy: `2 x 3`,
        queries: ['Width <= 2.5 AND Height <= 3.5'],
        type: 'raw',
      },
      {
        copy: `3 x 5`,
        queries: ['Width >= 2.6 AND Height >= 3.5 AND Width <= 3.8 AND Height <= 5.8'],
        type: 'raw',
      },
      {
        copy: `4 x 6`,
        queries: ['Width >= 4 AND Width <= 4.9 AND Height >= 5 AND Height <= 6.9'],
        type: 'raw',
      },
      {
        copy: `6 x 9`,
        queries: ['Width >= 5 AND Width <= 6.9 AND Height >= 6 AND Height <= 9.9'],
        type: 'raw',
      },
      {
        copy: `8 x 10`,
        queries: ['Width >= 7 AND Width <= 8.9 AND Height >= 9 AND Height <= 10.9'],
        type: 'raw',
      },
    ],
  },
];
