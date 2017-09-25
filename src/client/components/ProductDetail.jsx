// @flow
import React from 'react';
import AddToCartBtn from 'Ui/AddToCartBtn';
import FavoriteBtn from 'Ui/FavoriteBtn';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { IMAGE_ORIGIN, DEFAULT_ITEM } from 'Constants';

const aboutCopy = {
  tibetan: 'Tibetan wool, so cool! This rug is hand-knotted making it one of a kind. This rug is made from raw wool taken from Nepal to Tibet. Tibetan sheep live at high altitudes in extreme conditions and are known for producing some of the finest wool in the world. The wool is hand-carded, washed and hand-spun. The hand-knotting process enables us to produce a much denser pile than the finest quality machine-made rug. The rug will wear longer, be much more soil- and stain-resistant, and, once soiled, will clean up better than any machine-made counterparts.',
  newZealand: 'Talk about whoa! This rug is hand-knotted making it one of a kind. This rug is made from raw wool from our friends (sheep) in New Zealand. The wool is hand-carded, washed and hand-spun. The hand-knotting process enables us to produce a much denser pile than the finest quality machine-made rug. The rug will wear longer, be much more soil- and stain-resistant, and, once soiled, will clean up better than any machine-made counterparts.',
  hemp: 'Who doesn\'t like hemp?? This line is simple, versatile, and affordable. Put it inside, or put it outside. It\'s your life - live it.',
};

class ProductDetail extends React.Component {
  render() {
    const { product = DEFAULT_ITEM, loading }: { loading: string, product: Object } = this.props;
    let about;
    if (product.LongDescription.toLowerCase().includes('tibetan')) {
      about = aboutCopy.tibetan;
    } else if (product.LongDescription.toLowerCase().includes('zealand')) {
      about = aboutCopy.newZealand;
    } else if (product.LongDescription.toLowerCase().includes('hemp')) {
      about = aboutCopy.hemp;
    }

    if (!product) {
      return <Redirect to="/shop" />;
    }

    return (
      <div className="full-width">
        <section className="product-details-section">
          <div className="wrap product-details-wrap">
            <div className="product-details-image">
              <img src={`${IMAGE_ORIGIN}/landscape_${product.Images[0]}`} />
            </div>
            <div className="product-details-title">
              <FavoriteBtn className="heart" id={product._id} />
              <h2 className="margin--y-3">{product.Name}</h2>
              <p className="font-color--copyColor margin--bottom-1">{product.LongDescription}</p>
              <p className="font-color--copyColor">{product.ShortDescription}</p>
              <div className="line-break" />
              <h2 className="font-color--dark font-weight--normal">{product.Price.toLocaleString('USD', {
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

        <section className="wrap product-details-about-wrap margin--top-5">
          <div className="product-details-about">
            <h2 className="margin--bottom-5">About this rug</h2>
            <p>{about}</p>
          </div>
          <div className="product-details-materials">
            <div className="accordian">
              <div className="accordian-group">
                <div className="accordian-group-title">
                  Materials
                </div>
                <div className="accordian-group-content">
                  <p className="font-color--copyColor margin--bottom-1">{product.LongDescription}</p>
                  <p className="font-color--copyColor">{product.ShortDescription}</p>
                </div>
              </div>
              <div className="accordian-group">
                <div className="accordian-group-title">
                  Dimensions
              </div>
                <div className="accordian-group-content">
                  <p className="font-color--copyColor">{product.Width} feet x {product.Height} feet</p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    );
  }
}


const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params;
  return {
    product: state.productDetails.find(product => product._id === id),
    loading: state.loading.page,
  };
};

export default connect(mapStateToProps)(ProductDetail);
