// @flow
import React from 'react';
import { connect } from 'react-redux';
import { action } from 'Utils';
import actions from 'Actions';
import { Link } from 'react-router-dom';

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
    <div className="flex-parent flex-col">
      <button onClick={inCart ? removeFromCart(id) : addToCart(id)} className={`${className ? ` ${className}` : 'btn--primary--inverse'}`}>
        {inCart ? 'Remove From Cart' : 'Add To Cart'}
      </button>
      {inCart && (
        <Link className="btn--primary margin--top-4" to="/checkout">Checkout Now</Link>
      )}
    </div>
  );
}


const mapDispatchToProps = dispatch => ({
  addToCart: (product) => () => dispatch(action(ADD_TO_CART, product)),
  removeFromCart: (ID) => () => dispatch(action(REMOVE_FROM_CART, ID)),
});

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps;
  return {
    inCart: state.cart.items.findIndex(item => item === id || item._id === id) > -1,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddToCartBtn);

