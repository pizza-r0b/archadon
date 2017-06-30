import React from 'react';
import { connect } from 'react-redux';
import { IMAGE_ORIGIN, DEFAULT_ITEM } from 'Constants';
import actions from 'Actions';
import { Link } from 'react-router-dom';
import { action } from 'Utils';
const { REMOVE_FROM_CART } = actions;

type CartItemProps = {
  item: Object,
  removeFromCart: Function,
}

let CartItem = ({ item = DEFAULT_ITEM, removeFromCart }: CartItemProps) => (
  <div className="cart-item">
    <div className="img-wrap">
      {item.Images && <img alt={item.Name} src={`${IMAGE_ORIGIN}/${item.Images[0].src}`} />}
      <div>
        <div>{item.Name}</div>
        <div>{item.Width} x {item.Height}</div>
      </div>
    </div>
    <div className="details">
      <span className="strong">{item.Price.toLocaleString('USD', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}</span>
      <div className="margin--top-3">
        <span onClick={removeFromCart(item.ID)} style={{ cursor: 'pointer' }} className="font-color--first">Remove</span>
      </div>
    </div>
  </div>
);

const mapDispatchToProps = dispatch => ({
  removeFromCart: (ID) => () => dispatch(action(REMOVE_FROM_CART, ID)),
});

CartItem = connect(null, mapDispatchToProps)(CartItem);

function Cart({ cart: { items, totalPrice } }) {
  return (
    <div className="global-padding padding--top-10 flex-parent flex-grow-1 flex-col">
      {items.length === 0 &&
        <div className="flex-parent flex-col flex-grow-1 flex-align-center flex-justify-center">
          <h2>Your cart is empty</h2>
          <Link to="/shop" className="btn btn--first margin--top-3">Shop Now</Link>
        </div>
      }
      {items.length > 0 && (
        <div>
          <h2 className="margin--bottom-7">Shopping Cart</h2>

          <div className="flex-parent flex-grow-1 cart-wrap">
            <div className="cart-wrap-aside">
              <h3 className="strong">
                Total: {totalPrice.toLocaleString('USD', {
                  style: 'currency',
                  currency: 'USD',
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </h3>
              <p className="margin--bottom-3">
                Shipping: FREE
              </p>
              <Link to="/checkout" className="btn btn--second alt flex-grow-0">
                Check Out Now
              </Link>
            </div>
            <div className="flex-parent flex-col flex-grow-1">
              {items.map(item => <CartItem key={item.ID} item={item} />)}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = state => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(Cart);
