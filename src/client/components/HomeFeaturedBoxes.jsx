import React from 'react';
import { IMAGE_ORIGIN } from 'Constants';
import { Link } from 'react-router-dom';

function HomeFeaturedBoxes() {
  return (
    <div className="featured-boxes">
      <div className="featured-box--lightest">
        <div className="img">
          <div className="img--inner" style={{ backgroundImage: `url(${IMAGE_ORIGIN}/6x9_32963_29737.jpg)` }} />
        </div>
        <div className="section-1">
          <div>
            <h2>Modern Classics</h2>
            <h3 className="font-color--lighter uppercase">with old souls</h3>
          </div>
          <div>
            <Link to="/about" className="btn btn--alt">About our rugs</Link>
          </div>
        </div>
        <div className="inner" />
      </div>
      <div className="featured-box--first">
        <div className="img">
          <div className="img--inner" style={{ backgroundImage: `url(${IMAGE_ORIGIN}/6x9_32963_29737.jpg)` }} />
        </div>
        <div className="section-1">
          <div>
            <h2>Find</h2>
            <h3 className="font-color--lighter uppercase">Your favorite</h3>
          </div>
          <div>
            <a href="#" className="btn btn--alt">Shop</a>
          </div>
        </div>
        <div className="inner" />
      </div>
    </div>
  );
}

export default HomeFeaturedBoxes;
