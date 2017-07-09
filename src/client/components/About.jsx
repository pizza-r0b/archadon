import React from 'react';
import HeroHeader from 'Ui/HeroHeader';
import { IMAGE_ORIGIN } from 'Constants';

function About() {
  return (
    <div className="global-padding full-width">
      <HeroHeader
        title="One of a kind, hand-knotted, art that you walk on."
        src="https://assets.dev.archadon.com/6x9.1_32929_3694.jpg"
      />
      <section className="content-section">
        <div className="content">
          <img src="https://assets.archadon.com/6.1x9_S_2093_62.jpg" />
        </div>
        <div className="content">
          <h3>We take pride in our collection. Each of our rugs are hand-picked from the source. We promise to deliver only high-quality, hand-made, rugs. We want to give you something that you can take pride in. Since 1985 our supplier has traveled to the tribal area on the Afghan/Pakistan border and Tibet establishing lasting relationships with the very best rug weavers in those areas.</h3>
        </div>
      </section>
      <section className="content-section">
        <div className="content padding-m--right-5">
          <h1>I was inspired by the integrity and simple grace of the Tibetan people.</h1>
          <p className="margin--top-3">We knew little of one another and yet, we saw many things in the same way. You will see this in the way we create rugs: attention to detail, dedication to craft. Only traditional methods and the finest hand spun Tibetan wool will do. Like the integrity that defines a culture, there is integrity in this rug. It is born of pure craftsmanship. There is a magical quality too. It's in the colors, the design. It is the look of today: exciting, stirring, vital. The union of two worlds: a modern face with a soul that reaches far back in time. The only difference between this rug and other works of art is that you walk on it, you live with it, it becomes part of you. Inspiration that lasts a lifetime.</p>
        </div>
        <div className="content">
          <img src={`${IMAGE_ORIGIN}/tibet-rugs.jpg`} alt="Handwoven, oriental rugs" />
        </div>
      </section>
    </div>
  );
}

export default About;
