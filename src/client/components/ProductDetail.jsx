// @flow
import React from 'react';
import AddToCartBtn from 'Ui/AddToCartBtn';
import FavoriteBtn from 'Ui/FavoriteBtn';
import Icon from 'Ui/Svg';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { IMAGE_ORIGIN, DEFAULT_ITEM } from 'Constants';
import ProductList from 'Components/ProductList';
import classnames from 'classnames';

const returnSrcSet = (sku, ext = 'jpg') => `${IMAGE_ORIGIN}/sm_landscape_${sku}.${ext} 329w, ${IMAGE_ORIGIN}/md_landscape_${sku}.${ext} 658w, ${IMAGE_ORIGIN}/landscape_${sku}.${ext} 1315w`;

const aboutCopy = {
  tibetan: {
    title: 'About Tibetan Wool',
    paragraphs: [
      'Close your eyes and be transported to a wild, rugged place thousands of miles away. Home to Mt. Everest, Tibet is the highest area on earth, with an average elevation of over three miles above sea level. Tibetan sheep live at these lofty altitudes in extreme conditions. The “shear” toughness it takes to survive this climate produces some of the finest wool in the world.',
      'After it’s shorn, the wool is hand-carded, washed, and hand-spun. The hand-knotting process creates a much denser pile than even the finest-quality machine-made rug. Your Tibetan wool rug will outlast any machine-made rug and is far more soil- and stain-resistant.',
      'Go on—don’t be sheepish. Shop and save your faves. Which one makes your heart bleat faster?',
    ],
  },
  newZealand: {
    title: 'About New Zealand Wool',
    paragraphs: [
      'Kiwi sheep produce fine fleece. It’s true—we aren’t pulling the wool over your eyes. New Zealand’s cool climate, dominated by the mountains and sea, creates lush grazing lands. Good stuff in, good stuff out, we say.',
      'After the sheep are shorn, their wool is hand-carded, washed, and hand-spun. It’s then made into a one-of-a-kind rug. The hand-knotting process enables us to create a much denser pile than even the finest-quality machine-made rug. Your New Zealand wool rug will wear longer and be much more soil- and stain-resistant than any machine-made product.',
      'Come now, let’s shepherd you through our selection. Shop and save your faves.',
    ],
  },
  hemp: {
    title: 'Hemp Rugs',
    paragraphs: [
      'Who doesn\'t like hemp? This line is simple, versatile, and affordable. Put it inside, or put it outside. It\'s your life - live it.',
    ],
  },
};

class ImageZoom extends React.Component {

  state = {}

  onKeyDown = ({ key }) => {
    if (key.toLowerCase() === 'escape' && this.props.show) {
      this.props.onClose();
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.show && !this.props.show && !this.state.img) {
      const img = new Image();
      const src = this.props.img;
      new Promise((resolve, reject) => {
        img.addEventListener('load', resolve);
        img.addEventListener('error', reject);
      }).then(() => {
        this.setState({ img: src });
      }).catch(() => {
        this.props.onClose();
      });
      img.src = src;
    }
  }

  componentDidMount() {
    window.addEventListener('keydown', this.onKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onKeyDown);
  }

  render() {
    return (
      <div onClick={this.props.onClose} className={classnames('image-zoom', { show: this.props.show })}>
        <img src={this.state.img} style={{ maxWidth: 'none' }} />
      </div>
    )
  }
}

class ProductDetail extends React.Component {

  props: {
    loading: string,
    product: Object,
    products: Array<*>,
  }

  state = {}

  recs = []

  constructor(props) {
    super();
    this.recs = getRandom(props.products.filter(p => p !== props.match.params._id), 4);
  }

  onImageClick = () => {
    document.body.style.overflow = 'hidden';
    this.setState({ showImgZoom: true });
  }

  onZoomClose = () => {
    document.body.style.overflow = 'auto';
    this.setState({ showImgZoom: false });
  }

  componentDidMount() {

  }

  render() {
    if (this.props.loading) {
      return (
        <div className="flex-parent flex-justify-center flex-col flex-align-center flex-grow-1 padding--x-5">
          <div className="loading-indicator" />
          <h2>Loading</h2>
          <p className="align--center">Please be patient. We are working on making this faster.</p>
        </div>
      );
    }

    const {
      product = DEFAULT_ITEM,
    } = this.props;

    if (!product) {
      return <Redirect to="/shop" />;
    }

    let about = {};
    if (product.LongDescription.toLowerCase().includes('tibetan')) {
      about = aboutCopy.tibetan;
    } else if (product.LongDescription.toLowerCase().includes('zealand')) {
      about = aboutCopy.newZealand;
    } else if (product.LongDescription.toLowerCase().includes('hemp')) {
      about = aboutCopy.hemp;
    }

    const imgSrc = `${IMAGE_ORIGIN}/landscape_${product.Images[0]}`;

    return (
      <div className="full-width">
        <ImageZoom show={this.state.showImgZoom} img={imgSrc} onClose={this.onZoomClose} />
        <div className="wrap margin--bottom-10">
          <Link to="/shop">
            <div className="inline-flex flex-parent flex-align-center">
              <div style={{ width: '20px', height: '20px', transform: 'rotate(180deg)' }}>
                <Icon color="#000" variant="icon-right-arrow" />
              </div>
              <p className="small-caps margin--left-5">Back To Store</p>
            </div>
          </Link>
        </div>
        <section className="product-details-section">
          <div className="wrap product-details-wrap">
            <div className="product-details-image">
              <div className="stripe-image--left">
                <img
                  style={{ cursor: 'pointer' }}
                  onClick={this.onImageClick}
                  srcSet={returnSrcSet(product.SKU)}
                />
              </div>
              <p style={{ fontSize: '12px' }} className="margin--top-2 font-color--light">Click image to zoom.</p>
            </div>
            <div className="product-details-title">
              <FavoriteBtn className="heart" productId={product._id} />
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
                <AddToCartBtn id={product._id} />
              </div>
            </div>
          </div>
        </section>

        <section className="wrap product-details-about-wrap margin--top-5">
          <div className="product-details-about">
            <h2 className="margin--bottom-2">{about.title}</h2>
            {about.paragraphs && about.paragraphs.map((p, i) => (
              <p key={i} className="margin--top-3">{p}</p>
            ))}
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
        <section className="product-details-section margin--top-10">
          <div className="wrap">
            <h2>You Might Also Like...</h2>
            <ProductList {...{ products: this.recs }} />
          </div>
        </section>
      </div>
    );
  }
}

function getRandom(arr, n) {
  const result = new Array(n);
  let len = arr.length;
  const taken = new Array(len);
  if (n > len) {
    throw new RangeError('getRandom: more elements taken than available');
  }
  while (n--) {
    const x = Math.floor(Math.random() * len);
    result[n] = arr[x in taken ? taken[x] : x];
    taken[x] = --len;
  }
  return result;
}

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params;
  return {
    product: state.productDetails.find(product => product._id === id),
    loading: state.loading.page === 'detail',
    products: state.products.hits,
  };
};

export default connect(mapStateToProps)(ProductDetail);
