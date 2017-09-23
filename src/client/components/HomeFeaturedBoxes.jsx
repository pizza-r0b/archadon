import React from 'react';
import { IMAGE_ORIGIN } from 'Constants';

function HomeFeaturedBoxes() {
  return (
    <div className="featured-boxes">
      <div className="featured-box--lighter">
        <div className="img">
          <div className="img--inner" style={{ backgroundImage: `url(${IMAGE_ORIGIN}/6x9_32963_29737.jpg)` }} />
        </div>
        <div className="section-1">
          <div>
            <h2>Nice</h2>
            <h3 className="font-color--light uppercase">Really nice</h3>
          </div>
          <div>
            <a href="#" className="btn btn--alt">Shop</a>
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
            <h2>Cool</h2>
            <h3 className="font-color--light uppercase">And Lively</h3>
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
