import React from 'react';
import { src } from 'Utils';
import { Link } from 'react-router-dom';

//          <h3>We take pride in our collection. Each of our rugs are hand-picked from the source. We promise to deliver only high-quality, hand-made, rugs. We want to give you something that you can take pride in. Since 1985 our supplier has traveled to the tribal area on the Afghan/Pakistan border and Tibet establishing lasting relationships with the very best rug weavers in those areas.</h3>


function About() {
  return (
    <div className="full-width overflow-hidden">
      <div className="product-details-section margin--bottom-10">
        <div className="wrap">
          <div className="d-flex">
            <div className="top-content-left">
              <h1>About Us</h1>
              <h2>Hand woven, one of a kind, beautiful rugs.</h2>
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
          <p className="margin--top-15">We take pride in our collection. Each of our rugs are hand-picked from the source. We promise to deliver only high-quality, hand-made, rugs. We want to give you something that you can take pride in. Since 1985 our supplier has traveled to the tribal area on the Afghan/Pakistan border and Tibet establishing lasting relationships with the very best rug weavers in those areas.</p>
        </div>
      </div>

      <div className="wrap d-flex about-content-bottom margin--bottom-10 margin--top-20">
        <div className="top-content-left">
          <h1 className="margin--bottom-10">I was inspired by the integrity and simple grace of the Tibetan people.</h1>
          <p className="margin--top-3">We knew little of one another and yet, we saw many things in the same way. You will see this in the way we create rugs: attention to detail, dedication to craft. Only traditional methods and the finest hand spun Tibetan wool will do. Like the integrity that defines a culture, there is integrity in this rug. It is born of pure craftsmanship. There is a magical quality too. It's in the colors, the design. It is the look of today: exciting, stirring, vital. The union of two worlds: a modern face with a soul that reaches far back in time. The only difference between this rug and other works of art is that you walk on it, you live with it, it becomes part of you. Inspiration that lasts a lifetime.</p>
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
