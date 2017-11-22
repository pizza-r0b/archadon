import React from 'react';
import HomeSlider from './HomeSlider';
import HomeFeaturedItems from './HomeFeaturedBoxes';
import ProductList from './ProductList';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { IMAGE_ORIGIN } from 'Constants';
import LazyLoad from './LazyLoad';
import { Helmet } from 'react-helmet';
import { action } from 'Utils';
import actions from 'Actions';
const { LOAD_MORE } = actions;

class Home extends React.Component {
  render() {
    const { page, loadMore, nbPages, loading } = this.props;
    const nextProps = {
      style: { cursor: page === nbPages ? 'auto' : 'pointer' },
      className: `small-caps margin--left-3 ${page + 1 === nbPages ? 'font-color--lighter' : ''}`,
      onClick: page + 1 === nbPages ? null : () => {
        loadMore(page + 1);
      },
    };

    const prevProps = {
      className: `small-caps ${page === 0 ? 'font-color--lighter' : ''}`,
      style: { cursor: page === 0 ? 'auto' : 'pointer' },
      onClick: page === 0 ? null : () => {
        loadMore(page - 1);
      },
    };
    return (
      <div style={{ width: '100%' }}>
        <Helmet>
          <title>Archadon - Art for your floors - Handcrafted fine wool rugs - Home</title>
        </Helmet>
        <div className="wrap">
          <div className="flex-parent flex-align-center flex-justify-center flex-col margin--bottom-10">
            <h1 className="align--center">Art for your floors</h1>
            <h3 className="font-color--lighter">Handcrafted fine wool rugs</h3>
          </div>
          <HomeSlider />

          <div className="margin--bottom-10" style={{ width: '100%', maxWidth: '650px', margin: 'auto' }}>
            <h2 className="align--center">Hello there, and welcome!</h2>
            <p className="align--center">We’ve rolled out the welcome mat, so stay awhile. Browse our extensive collection of heirloom-quality rugs, save your faves, and imagine how a stunning rug will tie the room together.</p>
          </div>

          <hr />

          <div className="slim-box">
            <div className="flex-parent flex-wrap flex-justify-between flex-align-center">
              <div className="flex-parent flex-justify-start flex-align-center">
                <h2 className="margin--right-5">Popular</h2>
                <Link to="/shop" className="link--lighter small-caps">Shop All</Link>
              </div>
              <div className="flex-parent">

                <div {...prevProps}>Previous</div>
                <div {...nextProps}>Next</div>
              </div>
            </div>
            <ProductList loading={loading} products={this.props.products} />
            <div className="flex-parent flex-justify-between">
              <div {...prevProps}>Previous</div>
              <div {...nextProps}>Next</div>
            </div>
            {/*<div className="flex-parent flex-align-center flex-justify-center margin--bottom-10">
              <Link to="/shop" className="btn--primary--inverse"><span className="text">Shop All</span></Link>
    </div>*/}
          </div>

          <hr />

          <div className="flex-parent flex-col-break hp-christmas ">
            <div className="align--center">
              <Link to="/shop?tid=hp2">
                <LazyLoad>
                  <img data-src="https://assets.archadon.com/christmas_v2.jpg" />
                </LazyLoad>
              </Link>
            </div>
            <div>
              <h2>Give the gift of a rug that ties the room together this holiday season.</h2>
              <h3 className="font-color--lighter">We won't tell if you buy one for you, too.</h3>
              <Link className="btn--primary--inverse margin--top-5" to="/shop?tid=hp1">Find the Perfect Rug</Link>
            </div>
          </div>

          <hr />
          <div className="margin--top-10">
            <HomeFeaturedItems />
          </div>

          <hr className="margin--bottom-20" />
          <h2 className="align--center">About Us</h2>
          <p className="align--center margin--top-3">Archadon is an online company based in San Francisco and we ship our rugs from Utah.</p>
          <p className="align--center">Buy with confidence—learn more about risk-free rug buying with Archadon.</p>
          <div className="flex-parent flex-align-center flex-justify-center margin--top-3"><Link to="/about" className="btn--primary">Learn More</Link></div>
          <hr className="margin--y-20" />
          <h2 className="align--center margin--top-6">Have questions or want to say hello?</h2>
          <p className="align--center margin--top-3">Email us at hello@archadon.com</p>
          <hr className="margin--y-20" />

          <h2 className="align--center">Community-focused Giving</h2>

          <p className="align--center margin--top-3">Archadon supports the Nepal Cleft and Burn Center. This facility is Nepal’s first teaching hospital specializing in deformity-correcting reconstructive survey. A portion of all rug sales are donated by Archadon to the Center.</p>
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
  loading: state.loading.page === 'products',
  page: state.products.page,
  nbPages: state.products.nbPages,
});

const mapDispatchToProps = dispatch => ({
  loadMore(page) {
    dispatch(action(LOAD_MORE, { page }));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
