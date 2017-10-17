import React from 'react';
import HomeSlider from './HomeSlider';
import HomeFeaturedItems from './HomeFeaturedBoxes';
import ProductList from './ProductList';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

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
          <HomeFeaturedItems />
          <div className="slim-box">
            <div className="flex-parent flex-justify-start flex-align-center margin--bottom-10">
              <h2 className="margin--right-5">Popular</h2>
              <Link to="/shop" className="link--lighter small-caps">Shop All</Link>
            </div>
            <ProductList products={this.props.products} />
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
