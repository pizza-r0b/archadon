import React from 'react';
import HomeSlider from './HomeSlider';
import HomeFeaturedItems from './HomeFeaturedBoxes';
import ProductList from './ProductList';
import { connect } from 'react-redux';

class Home extends React.Component {
  render() {
    return (
      <div style={{ width: '100%' }}>
        <div className="wrap">
          <HomeSlider />
          <HomeFeaturedItems />
          <div className="flex-parent flex-justify-start flex-align-center">
            <h2 className="margin--right-5">Popular</h2>
            <a href="#" className="link--light small-caps">Shop All</a>
          </div>
          <ProductList products={this.props.products} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products.hits.slice(0, 7),
});

export default connect(mapStateToProps)(Home);
