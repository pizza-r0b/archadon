import React from 'react';
import HomeSlider from './HomeSlider';
import HomeFeaturedItems from './HomeFeaturedBoxes';
import ProductList from './ProductList';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { IMAGE_ORIGIN } from 'Constants';
import LazyLoad from './LazyLoad';
import WhyBuy from 'Components/WhyBuy';
import { Helmet } from 'react-helmet';

const returnSrcSet = (sku, ext = 'jpg') => `${IMAGE_ORIGIN}/sm_${sku}.${ext} 329w, ${IMAGE_ORIGIN}/md_${sku}.${ext} 658w, ${IMAGE_ORIGIN}/lg_${sku}.${ext} 1315w`;


class Home extends React.Component {
  render() {
    return (
      <div style={{ width: '100%' }}>
        <Helmet>
          <title>Archadon - Art for your floors - Handcrafted fine wool rugs - Home</title>
        </Helmet>
        <div className="wrap">
          <div className="flex-parent flex-align-center flex-justify-center flex-col margin--bottom-10">
            <h1>Art for your floors</h1>
            <h3 className="font-color--lighter">Handcrafted fine wool rugs</h3>
          </div>
          <HomeSlider />

          <div className="margin--bottom-10" style={{ width: '100%', maxWidth: '650px', margin: 'auto' }}>
            <h2 className="align--center">Hello there, and welcome!</h2>
            <p className="align--center">We’ve rolled out the welcome mat, so stay awhile. Browse our extensive collection of heirloom-quality rugs, save your faves, and imagine how a stunning rug will tie the room together.</p>
          </div>

          <hr />

          <div className="flex-parent flex-col-break hp-christmas ">
            <div className="align--center">
              <Link to="/shop?tid=hp2">
                <LazyLoad>
                  <img data-srcset={returnSrcSet('christmas-rugs')} />
                </LazyLoad>
              </Link>
            </div>
            <div>
              <h1>Give the gift of a rug that ties the room together this holiday season.</h1>
              <h3 className="font-color--lighter">We won't tell if you buy one for you, too.</h3>
              <Link className="btn--primary--inverse margin--top-5" to="/shop?tid=hp1">Find the Perfect Rug</Link>
            </div>
          </div>

          <hr />
          <div className="margin--top-10">
            <HomeFeaturedItems />
          </div>
          <div className="slim-box">
            <div className="flex-parent flex-justify-start flex-align-center">
              <h2 className="margin--right-5">Popular</h2>
              <Link to="/shop" className="link--lighter small-caps">Shop All</Link>
            </div>
            <ProductList products={this.props.products} />
            <div className="flex-parent flex-align-center flex-justify-center margin--bottom-10">
              <Link to="/shop" className="btn--primary--inverse"><span className="text">Shop All</span></Link>
            </div>
          </div>
          <hr className="margin--bottom-20" />
          <h2 className="align--center">About Us</h2>
          <p className="align--center margin--top-3">Archadon is made with love in the beautiful city of San Francisco and we have a warehouse underneath the slopes in Northern Utah.</p>
          <p className="align--center">Buy with confidence—learn more about risk-free rug buying with Archadon.</p>
          <div className="flex-parent flex-align-center flex-justify-center margin--top-3"><Link to="/about" className="btn--primary">Learn More</Link></div>
          <hr className="margin--y-20" />
          <h2 className="align--center margin--top-6">Have questions or want to say hello?</h2>
          <p className="align--center margin--top-3">Email us at hello@archadon.com</p>
          <hr className="margin--y-20" />

          <h2 className="align--center">Community-focused Giving</h2>

          <p className="align--center margin--top-3">Archadon supports the Nepal Cleft and Burn Center. This facility is Nepal’s first teaching hospital specializing in deformity-correcting reconstructive survey. A portion of all proceeds is donated towards equipment and medical staff costs.</p>
          <div className="flex-parent flex-align-center flex-justify-center margin--top-3">
            <a className="btn--primary" rel="noopener noreferrer" target="_blank" href="http://www.nepalcleftandburncenter.org/">Donate on their website</a>
          </div>

        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products.hits.slice(0, 8),
});

export default connect(mapStateToProps)(Home);
