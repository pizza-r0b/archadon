import React from 'react';
import { IMAGE_ORIGIN } from 'Constants';

function ProductList({ products }) {
  return (
    <div className="product-list-wrap">
      {products.map(product => (
        <div className="product-tile">
          <div className="product-tile-img">
            <img src={`${IMAGE_ORIGIN}/${product.Images && product.Images[0]}`} />
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProductList;
