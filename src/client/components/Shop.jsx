import React from 'react';
import ProductList from 'Components/ProductList';
import { connect } from 'react-redux';
import ProductTile from 'Components/ProductTile';
import { action } from 'Utils';
import actions from 'Actions';
import Filters from 'Ui/Filters';
import ClearFilterButton from 'Ui/ClearFilterButton';
let Velocity;
const { LOAD_MORE, ON_CLEAR_FILTERS } = actions;


function Shop({ products, page, nbPages, loadMore }) {
  const nextProps = {
    style: { cursor: page === nbPages ? 'auto' : 'pointer' },
    className: page === nbPages ? 'font-color--lighter' : '',
    onClick: page === nbPages ? null : async () => {
      loadMore(page + 1);
      if (!Velocity) {
        Velocity = await import('velocity-animate');
      }
      Velocity(document.body, 'scroll', { offset: 0, mobileHA: false });
    },
  };

  const prevProps = {
    className: page === 0 ? 'font-color--lighter' : '',
    style: { cursor: page === 0 ? 'auto' : 'pointer' },
    onClick: page === 0 ? null : async () => {
      loadMore(page - 1);
      if (!Velocity) {
        Velocity = await import('velocity-animate');
      }
      Velocity(document.body, 'scroll', { offset: 0, mobileHA: false });
    },
  };
  return (
    <div className="full-width">
      <ProductList products={products} />
      <div className="wrap">
        <div className="flex-parent flex-justify-between flex-align-center padding--x-9 margin--y-10">
          <div {...prevProps}>Previous</div>
          <div>{`${(page + 1)} / ${nbPages}`}</div>
          <div {...nextProps}>Next</div>
        </div>
      </div>
    </div>
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

