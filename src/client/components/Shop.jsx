import React from 'react';
import ProductList from 'Components/ProductList';
import { connect } from 'react-redux';
import ProductTile from 'Components/ProductTile';
import { action } from 'Utils';
import actions from 'Actions';
import Filters from 'Ui/Filters';
import ClearFilterButton from 'Ui/ClearFilterButton';
const { LOAD_MORE, ON_CLEAR_FILTERS } = actions;


function Shop({ products }) {
  return (
    <ProductList products={products} />
  );
}

const mapStateToProps = (state) => ({
  products: state.products.hits,
  page: state.products.page,
  nbPages: state.products.nbPages,
});

const mapDispatchToProps = dispatch => ({
  clear() {
    dispatch(action(ON_CLEAR_FILTERS));
  },
  loadMore(page) {
    dispatch(action(LOAD_MORE, { page }));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Shop);

