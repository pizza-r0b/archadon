import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { FILTERS_ARR, IMAGE_ORIGIN } from 'Constants';
import LazyLoad from './LazyLoad';
import actions from 'Actions';
import { action } from 'Utils';

const { ON_FILTER_UPDATE } = actions;

const sizeFilters = FILTERS_ARR.find(({ name }) => name === 'Size');
const returnSrcSet = (sku, ext = 'jpg') => `${IMAGE_ORIGIN}/sm_${sku}.${ext} 329w, ${IMAGE_ORIGIN}/md_${sku}.${ext} 658w, ${IMAGE_ORIGIN}/${sku}.${ext} 1315w`;

const getDataAttrs = sku => ({
  'data-srcset': returnSrcSet(sku),
  'data-webpsrcset': returnSrcSet(sku, 'webp'),
});

const images = {
  '2 x 3': getDataAttrs('2.1x3_31297_28947'),
  '3 x 5': getDataAttrs('3.1x5.1_30505_28417'),
  '4 x 6': getDataAttrs('4x6_31742_2790'),
  '6 x 9': getDataAttrs('6x9_32952_2945'),
  '8 x 10': getDataAttrs('8.2x9.11_31192_2334'),
};

class ShopBySize extends React.Component {
  onClick = (filter, i) => () => {
    this.props.updateFilter({...filter, field: 'Size', filterindex: 0, optionindex: i });
    this.props.history.push('/shop');
  }

  render() {
    return (
      <div className="slim-box">
        <div className="flex-parent flex-wrap flex-justify-between flex-align-center">
          <div className="flex-parent flex-justify-start flex-align-center">
            <h2 className="margin--right-5">Shop By Size</h2>
            <Link to="/shop" className="link small-caps">Shop All</Link>
          </div>
        </div>

        <div className="product-list-wrap--5">
          {sizeFilters.options.map((filter, i) => (
            <div key={i} className="product-tile" style={{ cursor: 'pointer' }} onClick={this.onClick(filter, i)}>
              <div className="product-tile-inner">
                <LazyLoad>
                  <img style={{ height: '250px', width: 'auto' }} className="flex-shrink-0" {...images[filter.copy]} />
                </LazyLoad>
                <p className="product-list-title align--center margin--top-3">{filter.copy}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateFilter(filter) {
    dispatch(action(ON_FILTER_UPDATE, { filter }));
  },
});

export default withRouter(connect(null, mapDispatchToProps)(ShopBySize));
