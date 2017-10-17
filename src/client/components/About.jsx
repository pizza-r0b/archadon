import React from 'react';
import { src } from 'Utils';
import { Link } from 'react-router-dom';

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
                <Link style={{ fontSize: '12px' }} className="margin--top-2 font-color--light link small-caps" to="/product/8x10'1 Bottle Caps Putty/59c8631b907d2a0d06a4d5c1">
                  Award winning bottle cap design
                </Link>
              </div>
            </div>
            <div className="top-content-right">
              <div className="stripe-image">
                <img className="max-width-100" src={src('oriental-rug-in-hallway_002.jpg')} />
              </div>
            </div>
          </div>
          <div className="margin--top-15">
            <p>There was a time in your life when dorm-level decorating was <i>still cool</i>. Remember that? Before you <i>grew up</i> and developed <i>awesome taste</i>.</p>
            <p className="margin--top-3">Now? Well, it’s time to live it up. Level up. Time to tie the room together. A handcrafted, heirloom-quality rug is a piece of art steeped in tradition, one that evokes faraway places and a whiff of the exotic.</p>
            <p className="margin--top-3">It’s classy, classic, cultured — <i>just like you</i>.</p>
          </div>
        </div>
      </div>

      <div className="wrap d-flex about-content-bottom margin--bottom-10 margin--top-20">
        <div className="top-content-left">
          <h1 className="margin--bottom-10">Modern classics, old souls</h1>
          <p>Each handcrafted rug in our collection is the product of timeless, traditional craftsmanship, great attention to detail, and only the world’s finest hand-spun wool. We travel thousands of miles to far-flung places to handpick them directly at the source. We also build relationships with the best weavers in the world, collaborating with them on vibrant, appealing designs.</p>
          <p className="margin--top-3">The result is nothing short of art—for your floors. Each one is a modern classic steeped in ancient practice. Rugs with old souls, we think.</p>
          <p className="margin--top-3">If that’s not sophistication, we don’t know what is.</p>
          <p className="margin--top-3">Come on—let’s go shopping.</p>
          <Link to="/shop" className="btn--primary margin--top-6">Shop</Link>
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
