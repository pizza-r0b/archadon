import React from 'react';
import HomeSlider from './HomeSlider';
import HomeFeaturedItems from './HomeFeaturedBoxes';
import ProductList from './ProductList';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { IMAGE_ORIGIN } from 'Constants';

const returnSrcSet = (sku, ext = 'jpg') => `${IMAGE_ORIGIN}/sm_${sku}.${ext} 329w, ${IMAGE_ORIGIN}/md_${sku}.${ext} 658w, ${IMAGE_ORIGIN}/lg_${sku}.${ext} 1315w`;


class Home extends React.Component {
  render() {
    return (
      <div style={{ width: '100%' }}>
        <div className="wrap">
          <div className="flex-parent flex-align-center flex-justify-center flex-col margin--bottom-10">
            <h1>Art for your floors</h1>
            <h2 className="font-color--lighter small-caps">Handcrafted fine wool rugs</h2>
          </div>
          <HomeSlider />

          <div className="margin--bottom-10" style={{ width: '100%', maxWidth: '650px', margin: 'auto' }}>
            <h2 className="align--center">Hello there, and welcome!</h2>
            <p className="align--center">We’ve rolled out the welcome mat, so stay awhile. Browse our extensive collection of heirloom-quality rugs, save your faves, and imagine how a stunning rug will tie the room together.</p>
          </div>

          <div className="flex-parent flex-col-break hp-christmas margin--bottom-10">
          <div className="align--center margin--bottom-5">
            <Link to="/shop?tid=hp2"><img srcSet={returnSrcSet('christmas-rugs')} /></Link>
          </div>
          <div>
            <h1>Find the perfect rug to tie their room together this holiday season.</h1>
            <h1 className="font-color--lighter">We won't tell if you get one for you too.</h1>
            <Link className="btn--alt margin--top-5" to="/shop?tid=hp1">Find Rugs You Love</Link>
          </div>
          </div>

          <HomeFeaturedItems />
          <div className="slim-box">
            <div className="flex-parent flex-justify-start flex-align-center margin--bottom-10">
              <h2 className="margin--right-5">Popular</h2>
              <Link to="/shop" className="link--lighter small-caps">Shop All</Link>
            </div>
            <ProductList products={this.props.products} />
            <div className="flex-parent flex-align-center flex-justify-center margin--bottom-20">
              <Link to="/shop" className="btn--alt">Shop All</Link>
            </div>

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
