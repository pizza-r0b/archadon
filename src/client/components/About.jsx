import React from 'react';
import { src } from 'Utils';
import { Link } from 'react-router-dom';
import ProductDetailLink from 'Components/ProductDetailLink';
import Guarantee from 'Components/Guarantee';

function About() {
  return (
    <div className="full-width overflow-hidden">
      <div className="product-details-section margin--bottom-10">
        <div className="wrap">
          <div className="d-flex">
            <div className="top-content-left">
              <h1>About</h1>
              <h2>Art beneath your feet</h2>
              <div className="stripe-image">
                <img className="max-width-100" src={src('bottlecap-rug-on-floor.jpg')} />
                <ProductDetailLink product={{ _id: '59c8631b907d2a0d06a4d5c1' }} className="margin--top-2 font-color--light link small-caps">Award winning bottle cap design - View This Rug</ProductDetailLink>
              </div>
            </div>
            <div className="top-content-right">
              <div className="stripe-image">
                <img style={{ maxWidth: '400px' }} className="max-width-100" src={src('room-with-rug_001.jpg')} />
                <ProductDetailLink product={{ _id: '59c8631b907d2a0d06a4d63b' }} className="margin--top-2 font-color--light link small-caps">View This Rug</ProductDetailLink>
              </div>
            </div>
          </div>
          <div className="margin--top-15 about-blurb-a">
            <p>There was a time in your life when dorm-level decorating was <i>still cool</i>. Remember that? Before you <i>grew up</i> and developed <i>awesome taste</i>.</p>
            <p className="margin--top-3">Now? Well, it’s time to live it up. Level up. Time to tie the room together. A handcrafted, heirloom-quality rug is a piece of art steeped in tradition, one that evokes faraway places and a whiff of the exotic.</p>
            <p className="margin--top-3">It’s classy, classic, cultured — <i>just like you</i>.</p>
          </div>
        </div>
      </div>

      <div className="wrap d-flex about-content-bottom margin--bottom-10 margin--top-20">
        <div className="top-content-left">
          <h1 className="margin--bottom-10">Modern classics, old souls</h1>
          <p>Each handcrafted rug in our collection is the product of timeless, traditional craftsmanship, great attention to detail, and only the world’s finest hand-spun wool. We travel thousands of miles to far-flung places, including Tibet and India, to handpick them directly at the source. We also build relationships with the best weavers in the world, collaborating with them on vibrant, appealing designs.</p>
          <p className="margin--top-3">The result is nothing short of art—for your floors. Each one is a modern classic steeped in ancient practice. Rugs with old souls, we think.</p>
          <p className="margin--top-3">If that’s not sophistication, we don’t know what is.</p>
          <p className="margin--top-3">Come on—let’s go shopping.</p>
          <Link to="/shop" className="btn--alt margin--top-6"><span className="text">Shop Now</span></Link>

          <Guarantee />
        </div>
        <div>
          <div className="stripe-image--left">
            <img className="max-width-100" src={src('tibet-rugs.jpg')} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
