// @flow
import React from 'react';
import Svg from 'Ui/Svg';
import { action } from 'Utils';
import actions from 'Actions';
import { connect } from 'react-redux';

const {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  TOGGLE_FAVORITE,
 } = actions;

const IMAGE_ORIGIN = process.env.NODE_ENV !== 'production' ? 'https://assets.dev.archadon.com' : 'https://assets.archadon.com';

type ProductTileProps = {
  product: {
    Price: number,
    Name: string,
    ID: string,
    Height: number,
    Width: number,
    LongDescription: string,
    ShortDescription: string,
    CreatedAt: number,
    Images: Object[],
  },
  addToCart: Function,
  toggleFavorite: Function,
  removeFromCart: Function,
  favorites: Array<string>,
  cart: Object,
};

function ProductTile({
  product,
  addToCart,
  cart: { items: cartItems },
  removeFromCart,
  toggleFavorite,
  favorites,
}: ProductTileProps) {
  const inCart = cartItems.find((item) => {
    if (!item) {
      item = {};
    }
    return item === product.ID || item.ID === product.ID;
  });

  let cartButton;
  if (inCart) {
    cartButton = (
      <div style={{ cursor: 'pointer' }} onClick={removeFromCart(product.ID)} className="flex-parent flex-align-center">
        <p className="font-color--white bold margin--left-1">Remove From Cart</p>
      </div>
    );
  } else {
    cartButton = (
      <div style={{ cursor: 'pointer' }} onClick={addToCart(product)} className="flex-parent flex-align-center">
        <div style={{ height: '17px', width: '23px' }}>
          <Svg variant="icon-cart" />
        </div>
        <p className="font-color--white bold margin--left-1">Add To Cart</p>
      </div>
    );
  }
  return (
    <div className="product-tile">
      <div className="product-tile-inner flex-parent flex-col flex-justify-between">
        <div className="product-tile-padding-x product-tile-padding-top">
          <div className="product-tile-img flex-parent flex-align-center flex-justify-center">
            <img src={`${IMAGE_ORIGIN}/${product.Images[0].src}`} />
          </div>
          <div className="flex-parent flex-row flex-justify-between margin--top-1">
            <div>
              <h2>{product.Name}</h2>
              <p>{`${product.Width}x${product.Height}`}</p>
            </div>
            <div onClick={toggleFavorite(product.ID)} className="heart">
              <Svg color="#803BDD" variant={favorites.includes(product.ID) ? 'icon-heart-filled' : 'icon-heart'} />
            </div>
          </div>
        </div>
        <div className="flex-parent flex-align-center flex-justify-between product-tile-padding-x product-tile-price-bar margin--top-5">
          <p className="font-color--white bold">${product.Price}</p>
          {cartButton}
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  addToCart: (product) => () => dispatch(action(ADD_TO_CART, product)),
  removeFromCart: (ID) => () => dispatch(action(REMOVE_FROM_CART, ID)),
  toggleFavorite: (ID) => () => dispatch((action(TOGGLE_FAVORITE, ID))),
});

const mapStateToProps = state => ({
  cart: state.cart,
  favorites: state.user.Favorites || [],
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductTile);
