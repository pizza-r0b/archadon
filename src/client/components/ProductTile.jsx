// @flow
import React from 'react';
import Svg from 'Ui/Svg';

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
  }
};

function ProductTile({ product }: ProductTileProps) {
  return (
    <div className="product-tile">
      <div className="product-tile-inner flex-parent flex-col flex-justify-between">
        <div className="product-tile-padding-x product-tile-padding-top">
          <div className="flex-parent flex-row flex-justify-between">
            <div>
              <h2>{product.Name}</h2>
              <p>{`${product.Width}x${product.Height}`}</p>
            </div>
            <div className="heart">
              <Svg color="#803BDD" variant="icon-heart" />
            </div>
          </div>
        </div>
        <div className="flex-parent flex-align-center flex-justify-between product-tile-padding-x product-tile-price-bar margin--top-5">
          <p className="font-color--white bold">${product.Price}</p>
          <div className="flex-parent flex-align-center">
            <div style={{ height: '17px', width: '23px' }}>
              <Svg variant="icon-cart" />
            </div>
            <p className="font-color--white bold margin--left-1">Add To Cart</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductTile;
