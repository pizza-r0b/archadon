import React from 'react';

function Shipping() {
  return (
    <div className="wrap margin--bottom-5">
      <div className="margin--bottom-5">
        <h1>We like making people happy.</h1>
        <h2>Free shipping + easy returns tend to do it.</h2>
      </div>
      <div className="flex-col-break">
        <div>
          <h3 className="underline-header margin--top-10">Shipping</h3>
          <p>All shipping on US orders is free—for you. Isn’t that cool? We think so, too.</p>
          <h3 className="underline-header margin--top-10">Returns</h3>
          <p>That rug should really tie the room together. If you’re not happy, neither are we. Email us at <span className="strong">returns@archadon.com</span> within 30 days and we’ll send you a return shipping label. As long as your rug is returned to us in like-new condition, you’ll receive a full refund.</p>
        </div>
        <div style={{ minWidth: '50%' }} className="flex-col-break--m flex-parent flex-align-center">
          <img src="https://assets.archadon.com/oriental-rug-in-hallway_002.jpg" />
        </div>
      </div>
    </div>
  );
}

export default Shipping;
