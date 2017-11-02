import React from 'react';

export default function Contact() {
  return (
    <div className="wrap">
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
            <h4 className="small-caps">General Inquiries:</h4>
            <p>hello@archadon.com</p>
          </div>
          <div className="margin--top-5">
            <h4 className="small-caps">Returns:</h4>
            <p>returns@archadon.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
