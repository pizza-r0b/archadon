// @flow
import React from 'react';
import { connect } from 'react-redux';
import ProductTile from 'Components/ProductTile';
import { action } from 'Utils';
import actions from 'Actions';
import Filters from 'Ui/Filters';
import ClearFilterButton from 'Ui/ClearFilterButton';
const { LOAD_MORE, ON_CLEAR_FILTERS } = actions;

type ProductListType = {
  products: Object[],
  page: number,
  nbPages: number,
  hideBtn: boolean,
  className: string,
  clear: Function,
  loadMore: Function,
}

function ProductList({
  products = [],
  className,
  hideBtn,
  clear,
  page,
  nbPages,
  loadMore,
}: ProductListType) {
  return (
    <div>
      <Filters />
      <div className="flex-grow-1 flex-parent flex-col margin--bottom-10">
        <div className={`margin--top-3 margin--bottom-6 flex-grow-1 flex-parent flex-wrap ${className ? `${className}` : 'flex-align-center flex-justify-center'}`}>
          {products.map(product => <ProductTile key={product.ID} product={product} />)}
          {products.length === 0 && (
            <div className="flex-parent flex-align-center flex-col flex-justify-center">
              <h2 className="margin--bottom-6">Your filters returned no results.</h2>
              <ClearFilterButton />
            </div>
          )}
        </div>
        {!hideBtn && page < nbPages &&
          <div className="flex-parent flex-align-center flex-justify-center">
            <button onClick={() => { loadMore(page + 1); }} className="btn btn--first">Load More</button>
          </div>
        }
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({
  products: ownProps.products || state.products.hits,
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
