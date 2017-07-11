// @flow
import React from 'react';
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
    loaded: this.props.homeIsLoaded,
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
  return (
    <div className="flex-parent flex-grow-1 flex-col">
      <section className="hero">
        <img className="main-image" alt="Handmade Artisan Rugs" src={this.images[0]} />
        <div className="btn btn--white" onClick={() => { this.velocityScroll(); }}>Shop Selection</div>
        <div className="hero-titles">
          <div className="hero-title">
            <h1 className="font-color--white align--center">Handmade Artisan Rugs</h1>
          </div>
        </div>
      </section>
      <section className="content-grid global-padding">
        <div className="content-grid-inner collection">
          <div className="grid-item collection-a"><img src="https://assets.archadon.com/6x9.2_32397_29426_v2.jpg" /></div>
          <div className="grid-item flex-col collection-b">
            <h1 className="align--center">The Abstract Collection</h1>
            <p className="align--center">A blend of modern with traditional.</p>
            <Link to="/abstract-handwoven-rug-collection" className="btn btn--first margin--top-4">View Collection</Link>
          </div>
          <div className="grid-item collection-c"><img src="https://assets.archadon.com/6x9_32394_29429_v2.jpg" /></div>
        </div>
      </section>

      <section className="content-section content-section--center">
        <div className="content">
          <h1>One of a Kind, Hand-knotted Art That You Walk On</h1>
          <h3>Since 1985 our supplier has traveled to the regions and villages where these rugs hand made - establishing long lasting relationships with the best rug weavers in those areas. Each rug is hand selected and made from the finest organic material. With over 25 years of experience we promise to deliver only the finest pieces that we know you will love. These rugs truly are art that you walk on.</h3>

        </div>


      </section>

      <section className="content-section content-section--center">
        <div className="content">
          <h1 className="margin--botom-3">Free Shipping</h1>
          <h1 className="margin--botom-3">Free Returns</h1>
          <h2>No Risk Rug Buying</h2>
        </div>


      </section>
      <div ref={c => { this.selection = c; }}>
        {this.state.loaded && <Shop />}
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
