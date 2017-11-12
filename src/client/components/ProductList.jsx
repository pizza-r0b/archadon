import React from 'react';
import { IMAGE_ORIGIN } from 'Constants';
import FavoriteBtn from 'Ui/FavoriteBtn';
import ProductDetailLink from 'Components/ProductDetailLink';
import LazyLoad from './LazyLoad';

const returnSrcSet = (sku, ext = 'jpg') => `${IMAGE_ORIGIN}/sm_${sku}.${ext} 329w, ${IMAGE_ORIGIN}/md_${sku}.${ext} 658w, ${IMAGE_ORIGIN}/${sku}.${ext} 1315w`;

function ProductList({ products, loading }) {
  return (
    <div className="product-list-wrap wrap">
      <div className={`loading-indicator-wrap product-list-loader ${loading ? 'show' : 'hide'}`}>
        <div className="loading-indicator" />
        <h2 className="align--center">Loading</h2>
      </div>
      {products.map(product => (
        <div key={product._id} className="product-tile">
          <div className="product-tile-inner">
            <ProductDetailLink product={product}>
              <div className="product-tile-img">
                <LazyLoad>
                  <img data-srcset={returnSrcSet(product.SKU)} data-webpsrcset={returnSrcSet(product.SKU, 'webp')} data-fallbacksrc={`${IMAGE_ORIGIN}/${product.Images && product.Images[0]}`} />
                </LazyLoad>
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
