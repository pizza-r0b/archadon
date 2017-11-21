import React from 'react';
import { Helmet } from 'react-helmet';

export default function Contact() {
  return (
    <div className="wrap">
      <Helmet>
        <title>Archadon - Art for your floors - Handcrafted fine wool rugs - Contact</title>
      </Helmet>

      <div className="margin--bottom-5">
        <h1>Get In Touch</h1>
        <h3>Have a question, want to provide feedback, or just want to say hello?</h3>
      </div>
      <div className="flex-col-break">
        <div>
          <img src="https://assets.archadon.com/room-with-rug_001.jpg" />
        </div>
        <div className="flex-col-break--m">
          <div>
            <p>Archadon is made with love in the beautiful city of San Francisco and we have a warehouse underneath the slopes in Northern Utah.</p>
          </div>
          <div className="margin--top-5">
            <h2 >Customer Support:</h2>
            <p>hello@archadon.com</p>
          </div>
          <div className="margin--top-5">
            <h2 >Returns:</h2>
            <p>returns@archadon.com</p>
          </div>


        </div>
      </div>
    </div>
  );
}
