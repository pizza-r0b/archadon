import React from 'react';
import LazyLoad from './LazyLoad';

export default () => (
  <div className="wrap">
    <div className="flex-parent flex-col flex-align-center">
      <h1 className="margin--bottom-1 align--center">Why Buy From Archadon?</h1>
      <h3 style={{ width: '100%', maxWidth: '800px' }} className="margin--bottom-8 why-buy-subtitle align--center font-color--lighter">Buying a handmade, heirloom-quality rug is a major purchase—we understand that. When you buy from Archadon, you can feel confident in the quality of our product and our satisfaction guarantee.</h3>
    </div>
    <div className="flex-col-break flex-parent margin--bottom-8">
      <div className="flex-1">
        <LazyLoad>
          <img data-src="https://assets.archadon.com/computer-with-rug.jpg" />
        </LazyLoad>
      </div>
      <div className="flex-1 flex-col-break--m">
        <div className="flex-1 margin--bottom-3">
          <h2 className="margin--bottom-3">Risk-free rug buying</h2>
          <p className="align--justify">We offer a vast selection of top-quality rugs in a variety of styles. All shipping is free—for you. And, if you don’t like your rug, return shipping is also on us. We make returns easy, and you’ll receive a full refund.</p>
        </div>
        <div className="flex-1 margin--bottom-3">
          <h2 className="margin--bottom-3">Quality investment</h2>
          <p className="align--justify">Each of our rugs is a handmade, one-of-a-kind, heirloom-quality piece that will last for generations. In a time when so much of what we consume is machine-made, owning something handcrafted is a point of pride. Not only are these rugs beautiful, they are also beautifully durable. Hand-knotted rugs made from high-quality wool have a denser pile, which means they’re thicker and tougher than any machine-made rug. They’re more stain- and soil-resistant, and they stand up to foot traffic, so you can put them anywhere in your home.</p>
        </div>
        <div className="flex-1 margin--bottom-3">
        <h2 className="margin--bottom-3">Community-focused giving</h2>
        <p className="align--justify">For 25 years, the Tibet Rug Company has been giving back to the Nepalese community. With the support of other rug importers and private donors, it established the Nepal Cleft and Burn Center with a mission to build Nepal's first teaching hospital specializing in deformity-correcting reconstructive surgery. The center opened for patients in 2014. Archadon is proud to support the Nepal Cleft and Burn Center’s continued growth with donations towards equipment and salaries for physicians and nurses.</p>
        </div>
        <div className="flex-1 margin--bottom-3">
          <h2 className="margin--bottom-3">Ethical sourcing</h2>
          <p className="align--justify">Our supplier handpicks all rugs at the source and has built longstanding relationships with Tibetans living in Nepal. This work is their livelihood as well as their craft—all rugs are produced via ethical labor practices, and no child labor is permitted.</p>
        </div>
        <div className="flex-1 margin--bottom-3">
          <h2 className="margin--bottom-3">Extensive selection</h2>
          <p className="align--justify">You’ll find rugs in an array of sizes, styles, designs, and colors. You’ll also find a variety of price points that fit different budgets. All of these choices are available with free shipping and easy returns, making shopping convenient for you.</p>
        </div>
      </div>

    </div>

  </div>
);
