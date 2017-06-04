// @flow
import React, { Component } from 'react';
import AddToCartBtn from 'Ui/AddToCartBtn';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { IMAGE_ORIGIN } from 'Constants';

function ProductDetail({ product }) {

  if (!product) {
    return <Redirect to="/shop" />;
  }

  return (
    <div className="product-detail global-padding padding--top-10">
      <div className="product-detail-image">
        <img alt={product.Name} src={`${IMAGE_ORIGIN}/${product.Images[0].src}`} />
      </div>
      <div className="product-detail-info">
        <AddToCartBtn id={product.ID} />
      </div>
    </div>
  );
}


const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params;
  return {
    product: state.productDetails.find(product => product.ID === id),
  };
};

export default connect(mapStateToProps)(ProductDetail);
