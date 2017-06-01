// @flow
import React from 'react';
import { connect } from 'react-redux';
import ProductTile from 'Components/ProductTile';
import { action } from 'Utils';
import actions from 'Actions';
const { LOAD_MORE } = actions;

type ProductListType = {
  products: Object[],
  lastEvaluatedKey: Object,
  hideBtn: boolean,
  className: string,
  loadMore: Function,
}

function ProductList({
  products = [],
  className,
  hideBtn,
  lastEvaluatedKey: { ID: lastEvaluatedKey } = {},
  loadMore,
}: ProductListType) {
  return (
    <div className="flex-grow-1 flex-parent flex-col margin--bottom-10">
      <div className={`margin--top-8 margin--bottom-6 flex-grow-1 flex-parent flex-wrap ${className ? `${className}` : 'flex-align-center flex-justify-center'}`}>
        {products.map(product => <ProductTile key={product.ID} product={product} />)}
      </div>
      {!hideBtn && lastEvaluatedKey &&
        <div className="flex-parent flex-align-center flex-justify-center">
          <button onClick={() => { loadMore(lastEvaluatedKey); }} className="btn btn--first">Load More</button>
        </div>
      }
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({
  products: ownProps.products || state.products.Items,
  lastEvaluatedKey: state.products.LastEvaluatedKey,
});

const mapDispatchToProps = dispatch => ({
  loadMore(startKey) {
    dispatch(action(LOAD_MORE, { startKey }));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
