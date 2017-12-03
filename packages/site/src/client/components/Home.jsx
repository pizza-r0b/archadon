import React from 'react';
import HomeSlider from './HomeSlider';
import HomeFeaturedItems from './HomeFeaturedBoxes';
import ProductList from './ProductList';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { IMAGE_ORIGIN } from 'Constants';
import LazyLoad from './LazyLoad';
import { Helmet } from 'react-helmet';
import ShopBySize from 'Components/ShopBySize';
import { action } from 'Utils';
import actions from 'Actions';
const { LOAD_MORE } = actions;

class Home extends React.Component {
  loadNext = page => {
    window.scrollTo(0, this.popularBox.offsetTop - 100);
    this.props.loadMore(page);
  }
  render() {
    const { page, loadMore, nbPages, loading } = this.props;
    const nextProps = {
      style: { cursor: page === nbPages ? 'auto' : 'pointer' },
      className: `small-caps margin--left-3 ${page + 1 === nbPages ? 'font-color--lighter' : ''}`,
      onClick: page + 1 === nbPages ? null : () => {
        this.loadNext(page + 1);
      },
    };

    const prevProps = {
      className: `small-caps ${page === 0 ? 'font-color--lighter' : ''}`,
      style: { cursor: page === 0 ? 'auto' : 'pointer' },
      onClick: page === 0 ? null : () => {
        this.loadNext(page - 1);
      },
    };
    return (
      <div style={{ width: '100%' }}>
        <Helmet>
          <title>Archadon - Art for your floors - Handcrafted fine wool rugs - Home</title>
        </Helmet>
        <div className="wrap">
          <div className="flex-parent flex-align-center flex-justify-center flex-col margin--bottom-10">
            <h1 className="align--center">Rugs that last a lifetime</h1>
            <h3 className="font-color--lighter">Hand-knotted fine wool rugs</h3>
          </div>
          <HomeSlider />

          {/*<div className="margin--bottom-10" style={{ width: '100%', maxWidth: '650px', margin: 'auto' }}>
            <h2 className="align--center">Hello there, and welcome!</h2>
            <p className="align--center">We’ve rolled out the welcome mat, so stay awhile. Browse our extensive collection of hand-knotted, heirloom-quality rugs, save your faves, and imagine how a stunning rug will tie the room together.</p>
    </div>*/}

          <hr />
          <ShopBySize />
          <hr />

          <div ref={c => { this.popularBox = c; }} className="slim-box">
            <div className="flex-parent flex-wrap flex-justify-between flex-align-center">
              <div className="flex-parent flex-justify-start flex-align-center">
                <h2 className="margin--right-5">Popular</h2>
                <Link to="/shop" className="link small-caps">Shop All</Link>
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

          <div style={{ margin: '0 auto', maxWidth: '1000px' }} className="flex-col-break flex-parent">
            <div>
              <Link to="/collection/welcome">
                <LazyLoad>
                  <img data-src="https://assets.archadon.com/welcome-rugs-collection-christmas.jpg" />
                </LazyLoad>
              </Link>
            </div>
            <div className="flex-col-break--m">
              <Link to="/shop">
                <LazyLoad>
                  <img data-src="https://assets.archadon.com/christmas-shop-all-rugs.jpg" />
                </LazyLoad>
              </Link>
            </div>
          </div>

          <hr />

          <h2>Testimonials</h2>

          <div className="flex-col-break flex-parent margin--top-5">
            <div className="flex-1">
              <p>Archadon has the best quality rugs for the absolute best prices. Try to find a hand-knotted Tibetan wool rug for a better price. You CAN'T!</p>
              <p className="strong">- Aaron, California</p>
            </div>
            <div className="flex-col-break--m flex-1">
              <p>My family has bought rugs from Tibet Rug Company for 20 years! I have several in my home and they are still like new! These are the best quality rugs.</p>
              <p className="strong">- Emily, Utah</p>
            </div>
          </div>
          <div className="flex-col-break flex-parent margin--top-3">
            <div className="flex-1">
              <p>Found a great rug for my living room. Great price and they shipped it right to me. No problems!</p>
              <p className="strong">- Natalie, California</p>
            </div>
            <div className="flex-col-break--m flex-1">
              <p>Returned a rug I bought from Archadon for a new one. They sent me a return label and I was able to easily send it back. Within two weeks I had my new rug.</p>
              <p className="strong">- David, California</p>
            </div>
          </div>

          <hr />

          <div className="margin--top-10">
            <HomeFeaturedItems />
          </div>
          <hr />
          <h2>Why hand-knotted?</h2>
          <p>Many companies advertise "handmade" rugs when really their rugs are hand-tufted - so by "handmade" they actually mean made by a machine that someone is holding in their hand. Each of our rugs is a hand-knotted, one-of-a-kind, heirloom-quality piece that will last for generations. In a time when so much of what we consume is machine-made, owning something handcrafted is a point of pride. Not only are these rugs beautiful, they are also beautifully durable. Hand-knotted rugs made from high-quality wool have a denser pile, which means they’re thicker and tougher than any machine-made rug. They’re more stain and soil resistant, and they stand up to foot traffic, so you can put them anywhere in your home.</p>

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
