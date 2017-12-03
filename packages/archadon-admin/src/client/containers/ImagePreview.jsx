import React from 'react';
import { connect } from 'react-redux';
import actions from '../constants';
import { action } from '../utils/common';

const { IMAGE_PREVIEW } = actions;

function ImagePreview({ image, onClick }) {
  console.log(image);
  return <div onClick={() => { onClick(); }}style={{ display: image ? 'flex' : 'none' }} className="img-prev"><img src={image} /></div>;
}

const mapStateToProps = state => ({
  image: state.ui.imagePreview,
});

const mapDispatchToProps = dispatch => ({
  onClick() {
    dispatch(action(IMAGE_PREVIEW, ''));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ImagePreview);

