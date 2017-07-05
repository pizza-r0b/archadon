// @flow
import React, { PropTypes } from 'react';
import Shop from 'Components/Shop';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { IMAGE_ORIGIN } from 'Constants';
import actions from 'Actions';
import { action } from 'Utils';

const { LOADING, HOME_LOADED } = actions;

const preload = images => Promise.all(images.map(src => new Promise((resolve) => {
  const el = document.createElement('img');

  el.addEventListener('load', () => {
    resolve();
  });

  el.addEventListener('error', () => {
    resolve();
  });

  el.src = src;
})));

class Home extends React.Component {

  props: {
    setLoadingState: Function,
    homeIsLoaded: boolean,
    homeLoaded: Function,
  }

  state = {
    currentIndex: 0,
  }

  scroll = () => {
    if (this.velocityScroll) {
      this.velocityScroll();
    }
  }

  Cta = () => (
    <div className="flex-parent flex-col flex-align-center">
      <h1 className="font-color--white align--center">
        Handmade, <span style={{ display: 'block' }}>artisan rugs</span>
      </h1>
      <button onClick={this.scroll} className="btn btn--white margin--top-5">Shop Selection</button>
    </div>
  )

  componentDidMount() {
    console.log(this.props.homeLoaded);
    if (!this.props.homeIsLoaded) {
      this.props.setLoadingState(true);
      preload(this.images).then(() => {
        this.props.setLoadingState(false);
        this.setState({ loaded: true });
        this.props.homeLoaded();
      });
    }


    import('velocity-animate').then(Velocity => {
      this.velocityScroll = () => {
        Velocity(this.selection, 'scroll', {
          duration: 1000,
          easing: 'easeOutExpo',
        });
      };
    });
  }

  images = [`${IMAGE_ORIGIN}/hp-artisan-rugs.jpg`];

  render() {
    const { Cta } = this;
    return (
      <div className="flex-parent flex-grow-1 flex-col">
        <section className="hero">
          <img className="main-image" alt="Handmade Artisan Rugs" src={this.images[0]} />
          <div className="btn btn--white" onClick={() => { this.velocityScroll() }}>Shop Selection</div>
          <div className="hero-titles">
            <div className="hero-title">
              <h1 className="font-color--white">Handmade</h1>
            </div>
            <div className="hero-title">
              <h1 className="font-color--white">Artisan</h1>
            </div>
            <div className="hero-title">
              <h1 className="font-color--white">Rugs</h1>
            </div>
          </div>
        </section>
        <section className="content-section content-section--center">
          <div className="content">
            <h1>One Of A Kind, Handwoven Art That You Walk On</h1>
            <h3 className="margin--top-3">Each rug is hand selected from the source. These rugs are handwoven and can take up to a year to complete. You're not purchasing just a rug. You're purchasing a piece of art. Something that will transform your room. Something to hold in high regard.</h3>
            { /* <Link to="/about" className="btn btn--first margin--top-3">More About Us</Link> */}
          </div>
        </section>
        <section className="content-section">
          <div className="content">
            <h1>I was inspired by the integrity and simple grace of the Tibetan people.</h1>
            <p className="margin--top-3">We knew little of one another and yet, we saw many things in the same way. You will see this in the way we create rugs: attention to detail, dedication to craft. Only traditional methods and the finest hand spun Tibetan wool will do. Like the integrity that defines a culture, there is integrity in this rug. It is born of pure craftsmanship. There is a magical quality too. It's in the colors, the design. It is the look of today: exciting, stirring, vital. The union of two worlds: a modern face with a soul that reaches far back in time. The only difference between this rug and other works of art is that you walk on it, you live with it, it becomes part of you. Inspiration that lasts a lifetime.</p>
          </div>
          <div className="content">
            <img src={`${IMAGE_ORIGIN}/tibet-rugs.jpg`} alt="Handwoven, oriental rugs" />
          </div>
        </section>
        <div ref={c => { this.selection = c; }}>
          { this.state.loaded && <Shop /> }
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setLoadingState(state) {
    dispatch(action(LOADING, state));
  },
  homeLoaded() {
    dispatch(action(HOME_LOADED));
  },
});

const mapStateToProps = state => ({
  homeIsLoaded: state.ui.homeLoaded,
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
