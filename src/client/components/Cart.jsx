import React from 'react';
import { connect } from 'react-redux';
import { IMAGE_ORIGIN, DEFAULT_ITEM } from 'Constants';
import actions from 'Actions';
import { Link } from 'react-router-dom';
import { action } from 'Utils';
import ProductDetailLink from 'Components/ProductDetailLink';

const { REMOVE_FROM_CART } = actions;

type CartItemProps = {
  item: Object,
  removeFromCart: Function,
}

let CartItem = ({ item = DEFAULT_ITEM, removeFromCart }: CartItemProps) => (
  <div className="cart-item">
    {item.Images && <ProductDetailLink product={item}><img alt={item.Name} src={`${IMAGE_ORIGIN}/landscape_${item.Images[0]}`} /></ProductDetailLink>}
    <div className="details">
      <div onClick={removeFromCart(item._id)} style={{ cursor: 'pointer' }} className="x-btn"></div>
      <div className="cart-details-top">
        <div>
          <h2 className="margin--bottom-3">{item.Name}</h2>
          <p className="font-color--lighter">{item.LongDescription} - {item.ShortDescription} - {item.Width} x {item.Height}</p>
        </div>
        <h3 className="font-color--light h3">{item.Price.toLocaleString('USD', {
          style: 'currency',
          currency: 'USD',
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}</h3>
      </div>
      <div>

      </div>
    </div>
  </div>
);

const mapDispatchToProps = dispatch => ({
  removeFromCart: (ID) => () => dispatch(action(REMOVE_FROM_CART, ID)),
});

CartItem = connect(null, mapDispatchToProps)(CartItem);

function Cart({ cart: { items, totalPrice } }: { cart: Object }) {
  return (
    <div className="wrap margin--bottom-5">
      {items.length === 0 &&
        <div className="flex-parent flex-col flex-grow-1 flex-align-center flex-justify-center">
          <h2>Your cart is empty</h2>
          <Link to="/shop" className="btn--primary margin--top-5">Shop Now</Link>
        </div>
      }
      {items.length > 0 && (
        <div>
          <div className="flex-parent flex-align-center underline-header">
            <h2 className="margin--right-10">Your Cart</h2>
            <p className="font-color--light">{`${items.length} ${items.length === 1 ? 'Item' : 'Items'}`}</p>
          </div>
          {items.map(item => <CartItem key={item._id} item={item} />)}
          <div className="cart-cont-shopping margin--y-10">
            <Link to="/shop" className="link--underlined">Continue Shopping</Link>
          </div>
          <div className="cart-bottom-row">
            <Link to="/checkout" className="btn--primary--inverse checkout-btn">Checkout Now</Link>
            <div className="flex-parent flex-align-center">
              <p className="margin--right-3">Total Price</p>
              <h2 className="font-color--light">{totalPrice.toLocaleString('USD', {
                style: 'currency',
                currency: 'USD',
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}</h2>
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
