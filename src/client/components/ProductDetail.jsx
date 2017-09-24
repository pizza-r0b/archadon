// @flow
import React from 'react';
import AddToCartBtn from 'Ui/AddToCartBtn';
import FavoriteBtn from 'Ui/FavoriteBtn';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { IMAGE_ORIGIN, DEFAULT_ITEM } from 'Constants';

function ProductDetail({ product = DEFAULT_ITEM, loading }: { loading: string, product: Object }) {
  if (!product) {
    return <Redirect to="/shop" />;
  }

  return (
    <div className="full-width">
      <section className="product-details-main">
        <div className="wrap product-details-wrap">
          <div className="product-details-image">
            <img src={`${IMAGE_ORIGIN}/landscape_${product.Images[0]}`} />
          </div>
          <div className="product-details-title">
            <FavoriteBtn className="heart" id={product._id} />
            <h2 className="margin--y-3">{product.Name}</h2>
            <p className="font-color--light margin--bottom-1">{product.LongDescription}</p>
            <p className="font-color--light">{product.ShortDescription}</p>
            <div className="line-break" />
            <h2 className="font-color--light font-weight--normal">{product.Price.toLocaleString('USD', {
              style: 'currency',
              currency: 'USD',
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}</h2>
          </div>
          <div className="product-details-btns">
            <div>
              <button className="btn--primary--inverse">Add To Cart</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params;
  return {
    product: state.productDetails.find(product => product._id === id),
    loading: state.loading.page,
  };
};

export default connect(mapStateToProps)(ProductDetail);
