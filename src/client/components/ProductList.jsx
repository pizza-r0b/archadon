import React from 'react';
import { IMAGE_ORIGIN } from 'Constants';
import FavoriteBtn from 'Ui/FavoriteBtn';
import ProductDetailLink from 'Components/ProductDetailLink';

function ProductList({ products }) {
  return (
    <div className="product-list-wrap wrap">
      {products.map(product => (
        <div key={product._id} className="product-tile">
          <div className="product-tile-inner">
            <ProductDetailLink product={product}>
              <div className="product-tile-img">
                <img src={`${IMAGE_ORIGIN}/${product.Images && product.Images[0]}`} />
              </div>
              <div className="margin--top-3">
                <p className="product-tile-title">{product.Name || 'Cool Rug'}</p>
                <p className="product-tile-title font-color--lighter">{product.ShortDescription}</p>
              </div>
            </ProductDetailLink>

            <div className="margin--top-2 flex-parent flex-justify-between">
              <p className="product-tile-title font-color--light">{(product.Price).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
              <FavoriteBtn className="heart" productId={product._id} />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProductList;
