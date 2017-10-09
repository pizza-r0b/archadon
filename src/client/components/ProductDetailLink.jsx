// @flow
import React from 'react';
import { connect } from 'react-redux';
import { action } from 'Utils';
import actions from 'Actions';

const { GET_PRODUCT_DETAILS } = actions;

type ProductDetailLinkProps = {
  children: React.Element<*>,
  product: Object,
  onClick: Function,
  className?: string,
}

function ProductDetailLink({ children, product, onClick, className }: ProductDetailLinkProps) {
  return (
    <a className={className} href={`/product/${product.Name}/${product._id}`} onClick={onClick(product)}>
      {children}
    </a>
  );
}

const mapDispatchToProps = dispatch => ({
  onClick: product => e => {
    e.preventDefault();
    dispatch(action(GET_PRODUCT_DETAILS, product));
  },
});

export default connect(null, mapDispatchToProps)(ProductDetailLink);
