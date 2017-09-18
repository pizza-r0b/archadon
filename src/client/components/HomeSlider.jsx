import React from 'react';
import { IMAGE_ORIGIN } from 'Constants';

// Name: 3'1x5'1 | Width: | Height: 5.1 | Price: 344.74 | Qty: 1
// Short Description: 100 knot
// Long Description: Tibetan WoolID: 59bdbf4f857c5b78b3a4c440
// SKU: 3.1x5.1_32438_29431

// Name: 6x9 | Width: | Height: 9 | Price: 756 | Qty: 1
// Short Description: Soumak (Flatweave)
// Long Description: New Zealand WoolID: 59bdbf4f857c5b78b3a4c4f0
// SKU: 6x9_S_2081_50

// Name: 6'1x9'1 | Width: | Height: 9.1 | Price: 756 | Qty: 1
// Short Description: Soumak (Flatweave)
// Long Description: New Zealand WoolID: 59bdbf4f857c5b78b3a4c49d
// SKU: 6.1x9.1_S_2090_59

// Name: 6x9 | Width: | Height: 9 | Price: 1134 | Qty: 1
// Short Description: 100 knot
// Long Description: Tibetan WoolID: 59bdbf4f857c5b78b3a4c4ee
// SKU: 6x9_32963_29737

const images = [
  {
    headline: 'Headline 1',
    title: 'Soumak Weave',
    subtitle: 'One of a kind',
    image: `${IMAGE_ORIGIN}/3.1x5.1_32438_29431.jpg`,
    id: '59bdbf4f857c5b78b3a4c440',
  },
  {
    headline: 'Headline 1',
    title: 'Title',
    subtitle: 'Sub Title',
    image: `${IMAGE_ORIGIN}/6x9_S_2081_50.jpg`,
    id: '59bdbf4f857c5b78b3a4c4f0',
  },
  {
    headline: 'Headline 1',
    title: 'Title',
    subtitle: 'Sub Title',
    image: `${IMAGE_ORIGIN}/6.1x9.1_S_2090_59.jpg`,
    id: '59bdbf4f857c5b78b3a4c49d',
  },
  {
    headline: 'Headline 1',
    title: 'Title',
    subtitle: 'Sub Title',
    image: `${IMAGE_ORIGIN}/6x9_32963_29737.jpg`,
    id: '59bdbf4f857c5b78b3a4c4ee',
  },
]

class HomeSlider extends React.Component {
  render() {
    return (
      <div>
        <div className="home-slider">
          <div className="home-slider-item">

          </div>
          <div className="featured-img home-slider-item">
            <div className="img">
              <img src={images[0].image} />
            </div>
          </div>
          <div className="home-slider-item">
            <div className="home-slider-cta">
              <h3>{images[0].subtitle}</h3>
              <h2 className="margin--top-2 margin--bottom-5">{images[0].title}</h2>
              <a href="#" className="btn btn--primary">See More</a>
            </div>
          </div>
        </div>
        <div className="home-slider-btns">

        </div>
      </div>
    );
  }
}

export default HomeSlider;
