// @flow
import React from 'react';
import { connect } from 'react-redux';
import { action } from 'Utils';
import actions from 'Actions';

const { ADD_TO_CART, REMOVE_FROM_CART } = actions;

type AddToCartProps = {
  inCart: boolean,
  id: string,
  removeFromCart: Function,
  addToCart: Function,
  className: string,
};

function AddToCartBtn({ inCart, id, removeFromCart, addToCart, className }: AddToCartProps) {
  return (
    <button onClick={inCart ? removeFromCart(id) : addToCart(id)} className={`btn btn--first${className ? ` ${className}` : ''}`}>
      {inCart ? 'Remove From Cart' : 'Add To Cart'}
    </button>
  );
}


const mapDispatchToProps = dispatch => ({
  addToCart: (product) => () => dispatch(action(ADD_TO_CART, product)),
  removeFromCart: (ID) => () => dispatch(action(REMOVE_FROM_CART, ID)),
});

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps;
  return {
    inCart: state.cart.items.findIndex(item => item === id || item.ID === id) > -1,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddToCartBtn);

