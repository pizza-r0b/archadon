import React from 'react';
import LazyLoad from './LazyLoad';

export default () => (
  <div className="wrap">
    <div className="flex-col-break flex-parent margin--bottom-8">
      <div className="flex-1">
        <h1 className="margin--bottom-1">Why Buy From Archadon?</h1>
        <h3 className="margin--bottom-8 why-buy-subtitle">Buying a handmade, heirloom-quality rug is a major purchase—we understand that. When you buy from Archadon, you can feel confident in the quality of our product and our satisfaction guarantee.</h3>
        <div className="flex-1 margin--bottom-6">
          <h2 className="margin--bottom-3">Risk-free rug buying</h2>
          <p className="align--justify">We offer a vast selection of top-quality rugs in a variety of styles. All shipping is free—for you. And, if you don’t like your rug, return shipping is also on us. We make returns easy, and you’ll receive a full refund.</p>
        </div>
        <div className="flex-1 margin--bottom-6">
          <h2 className="margin--bottom-3">Ethical sourcing</h2>
          <p className="align--justify">Our suppliers handpick all rugs at the source, and they’re strictly against child labor and abusive labor practices. The best-quality Tibetan rugs currently being manufactured on a commercial scale are those produced in Nepal by Tibetan refugees. This work is their livelihood as well as their craft.</p>
        </div>
        <div className="flex-1 margin--bottom-6">
          <h2 className="margin--bottom-3">Extensive selection</h2>
          <p className="align--justify">You’ll find rugs in an array of sizes, styles, designs, and colors. You’ll also find a variety of price points that fit different budgets. All of these choices are available with free shipping and easy returns, making shopping convenient for you.</p>
        </div>
        <div className="flex-1 margin--bottom-6">
          <h2 className="margin--bottom-3">Quality investment</h2>
          <p className="align--justify">Each of our rugs is a handmade, one-of-a-kind, heirloom-quality piece. In a time when so much of what we consume is machine-made, owning something handcrafted can be a point of pride. Additionally, hand-knotted rugs with high-quality wool have a denser pile. Wool is also more stain- and soil-resistant and easier to clean than synthetic fibers. When cared for properly, your rug can last for generations.</p>
        </div>
      </div>
      <div className="flex-col-break--m flex-1">
        <LazyLoad>
          <img data-src="https://assets.archadon.com/computer-with-rug.jpg" />
        </LazyLoad>
      </div>
    </div>

  </div>
);
