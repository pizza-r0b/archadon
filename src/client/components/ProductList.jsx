// @flow
import React from 'react';
import { connect } from 'react-redux';
import ProductTile from 'Components/ProductTile';

function ProductList({ products = [], lastEvaluatedKey: { ID } = {} }: {
  products: Object[],
  lastEvaluatedKey: Object,
}) {
  return (
    <div className="flex-grow-1 flex-parent flex-col">
      <div className="margin--top-8 margin--bottom-8 flex-grow-1 flex-parent flex-wrap flex-align-center flex-justify-center">
        {products.map(product => <ProductTile product={product} />)}
      </div>
      {ID &&
        <div className="flex-parent flex-align-center flex-justify-center">
          <button className="btn btn--first">Load More</button>
        </div>
      }
    </div>
  );
}

const mapStateToProps = state => ({
  products: state.products.Items,
  lastEvaluatedKey: state.products.LastEvaluatedKey,
});

export default connect(mapStateToProps)(ProductList);
