import React from 'react';
import ProductList from 'Components/ProductList';
import { connect } from 'react-redux';
import { action } from 'Utils';
import actions from 'Actions';
import Filters from 'Ui/Filters';
import { Helmet } from 'react-helmet';
const { LOAD_MORE, ON_CLEAR_FILTERS } = actions;

function Shop({ products, page, nbPages, loadMore, loading }) {
  const nextProps = {
    style: { cursor: page === nbPages ? 'auto' : 'pointer' },
    className: page + 1 === nbPages ? 'font-color--lighter' : '',
    onClick: page + 1 === nbPages ? null : () => {
      loadMore(page + 1);
      window.scrollTo(0, 0);
    },
  };

  const prevProps = {
    className: page === 0 ? 'font-color--lighter' : '',
    style: { cursor: page === 0 ? 'auto' : 'pointer' },
    onClick: page === 0 ? null : () => {
      loadMore(page - 1);
      window.scrollTo(0, 0);
    },
  };
  return (
    <div className="full-width">
      <Helmet>
        <title>Archadon - Art for your floors - Handcrafted fine wool rugs - Shop</title>
      </Helmet>
      <Filters />
      {products.length > 0 && <ProductList loading={loading} products={products} />}
      {products.length === 0 && (
        <div className="margin--top-5">
          <h2 key="1" className="align--center">Your search returned zero results! Try clearing your filters.</h2>
          <h3 key="2" className="align--center font-color--lighter">We are working hard to make filtering better for you.</h3>
          <p className="align--center margin--top-5">Provide feedback at hello@archadon.com</p>
        </div>
      )}
      {products.length > 0 &&
        <div className="wrap">
          <div className="flex-parent flex-justify-between flex-align-center padding--x-9 margin--y-10 small-caps">
            <div {...prevProps}>Previous</div>
            <div>{`${(page + 1)} / ${nbPages}`}</div>
            <div {...nextProps}>Next</div>
          </div>
        </div>
      }
    </div>
  );
}

const mapStateToProps = (state) => ({
  products: state.products.hits,
  page: state.products.page,
  nbPages: state.products.nbPages,
  loading: state.loading.page === 'products',
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

