import React from 'react';
import { src } from 'Utils';
import { Link } from 'react-router-dom';
import ProductDetailLink from 'Components/ProductDetailLink';
import Guarantee from 'Components/Guarantee';
import WhyBuy from 'Components/WhyBuy';
import { Helmet } from 'react-helmet';
import Who from 'Components/Who';
import LazyLoad from 'Components/LazyLoad';

function About() {
  return (
    <div className="full-width overflow-hidden">
      <Helmet>
        <title>Archadon - Art for your floors - Handcrafted fine wool rugs - About</title>
      </Helmet>
      <div className="product-details-section margin--bottom-10">
        <div className="wrap">
          <div className="d-flex">
            <div className="top-content-left">
              <h1>About</h1>
              <h2>Art beneath your feet</h2>
              <div className="stripe-image">
                <LazyLoad>
                  <img className="max-width-100" data-src={src('bottlecap-rug-on-floor.jpg')} />
                </LazyLoad>
                <ProductDetailLink product={{ _id: '59c8631b907d2a0d06a4d5c1' }} className="margin--top-2 font-color--light link small-caps">Award winning bottle cap design - View This Rug</ProductDetailLink>
              </div>
            </div>
            <div className="top-content-right">
              <div className="stripe-image">
                <LazyLoad>
                  <img style={{ maxWidth: '400px' }} className="max-width-100" data-src={src('room-with-rug_001.jpg')} />
                </LazyLoad>
                <ProductDetailLink product={{ _id: '59c8631b907d2a0d06a4d63b' }} className="margin--top-2 font-color--light link small-caps">View This Rug</ProductDetailLink>
              </div>
            </div>
          </div>
          <div className="margin--top-15 about-blurb-a">

            <Who />
            <hr />
            <h1>Who you are</h1>
            <p>There was a time in your life when dorm-level decorating was still cool. Remember that? Before you grew up and developed awesome taste.</p>
            <p className="margin--top-3">Now? Well, it’s time to live it up. Level up. Time to tie the room together. A handcrafted, heirloom-quality rug is a piece of art steeped in tradition, one that evokes faraway places and a whiff of the exotic.</p>
            <p className="margin--top-3">It’s classy, classic, cultured — just like you.</p>
          </div>
        </div>
      </div>

      <WhyBuy />

      <hr />

      <div className="wrap margin--bottom-10">
        <div className="flex-col-break">
          <div className="flex-1">
            <h1 className="margin--bottom-3">Modern classics, old souls</h1>
            <p>Each handcrafted rug in our collection is the product of timeless, traditional craftsmanship, great attention to detail, and only the world’s finest hand-spun wool. We travel thousands of miles to far-flung places, including Tibet and India, to handpick them directly at the source. We also build relationships with the best weavers in the world, collaborating with them on vibrant, appealing designs.</p>
            <p className="margin--top-3">The result is nothing short of art—for your floors. Each one is a modern classic steeped in ancient practice. Rugs with old souls, we think.</p>
            <p className="margin--top-3">If that’s not sophistication, we don’t know what is.</p>
            <p className="margin--top-3">Come on—let’s go shopping.</p>
          </div>
          <div className="flex-col-break--m">
            <Guarantee noMargin />
          </div>
        </div>
      </div>
      <div className="flex-parent flex-align-center flex-justify-center">
        <Link to="/shop" className="btn--primary--inverse margin--top-6 margin--x-auto"><span className="text">Shop Now</span></Link>
      </div>
    </div>
  );
}

export default About;
