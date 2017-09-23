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
          <div className="slim-box">
            <div className="flex-parent flex-justify-start flex-align-center margin--bottom-10">
              <h2 className="margin--right-5">Popular</h2>
              <a href="#" className="link--lighter small-caps">Shop All</a>
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
