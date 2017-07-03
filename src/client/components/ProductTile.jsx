// @flow
import React from 'react';
import Svg from 'Ui/Svg';
import FavoriteBtn from 'Ui/FavoriteBtn';
import { action } from 'Utils';
import actions from 'Actions';
import { connect } from 'react-redux';
import { IMAGE_ORIGIN, DEFAULT_ITEM } from 'Constants';
import ProductDetailLink from 'Components/ProductDetailLink';

const {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  TOGGLE_FAVORITE,
 } = actions;

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
  product = DEFAULT_ITEM,
  addToCart,
  cart: { items: cartItems },
  removeFromCart,
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
          <ProductDetailLink product={product}>
            {product.Images && <div style={{ backgroundImage: `url(${`${IMAGE_ORIGIN}/${product.Images[0].src}`})` }} className="product-tile-img flex-parent flex-align-center flex-justify-center" />}
          </ProductDetailLink>
          <div className="flex-parent flex-row flex-justify-between margin--top-1">
            <div>
              <ProductDetailLink product={product}>
                <h2>{product.Name}</h2>
              </ProductDetailLink>
              <p>{product.LongDescription && `${product.LongDescription}`}</p>
            </div>
            <FavoriteBtn id={product.ID} />
          </div>
        </div>
        <div className="flex-parent flex-align-center flex-justify-between product-tile-padding-x product-tile-price-bar margin--top-5">
          <p className="font-color--white bold">{product.Price.toLocaleString('USD', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}</p>
          {cartButton}
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  addToCart: (product) => () => dispatch(action(ADD_TO_CART, product)),
  removeFromCart: (ID) => () => dispatch(action(REMOVE_FROM_CART, ID)),
});

const mapStateToProps = state => ({
  cart: state.cart,
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductTile);
