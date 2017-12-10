import React from 'react';
import { DropZone, readAsBase64 } from 'archadon-utils';
import mime from 'mime-types';
import actions from 'Actions';
import { action } from 'Utils';
import { connect } from 'react-redux';
import ProductList from 'Components/ProductList';
import LoadingIndicator from 'Components/LoadingIndicator';
import classnames from 'classnames';

const { REQUEST_PAIR_START } = actions;

const dataURItoBlob = (dataURI, type) => {
  const byteString = atob(dataURI.split(',')[1]);
  const ab = new ArrayBuffer(byteString.length);
  const ia = new Uint8Array(ab);
  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }

  return new Blob([ab], {
    type,
  });
};

const emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

function getMimeType(encoded) {
  let result = null;
  const m = encoded.match(/data:([a-zA-Z0-9]+\/[a-zA-Z0-9-.+]+).*,.*/);

  if (m && m.length) {
    result = m[1];
  }

  return result;
}

class PairRoom extends React.Component {

  state = {}

  async _receiveFiles([file]) {
    const { dataURL } = await readAsBase64(file);
    this.setState({ dataURL });
    const mimeType = getMimeType(dataURL);
    const ext = mime.extension(mimeType);
    const blob = dataURItoBlob(dataURL, mimeType);
    this.props.requestProducts({
      blob,
      ext,
      mimeType,
      dataURL,
    });
  }

  state = {
    email: '',
    password: '',
    errors: {},
  }

  onChange = ({ currentTarget: { value, name: key } }) => {
    this.setState({ [key]: value });
  }

  isValid = () => {
    const errors = [];

    if (!emailRegex.test(this.state.email)) {
      errors.push({ email: true });
    }

    if (!this.state.password) {
      errors.push({ password: true });
    }

    const valid = errors.length === 0;

    if (!valid) {
      this.setState({
        errors: errors.reduce((a, b) => { return { ...a, ...b } }, {}),
      });
    }

    return errors.length === 0;
  }

  receiveFiles = this._receiveFiles.bind(this)

  render() {
    const hasResults = this.props.products.results.hits && this.props.products.results.hits.length > 0;
    const heading = { title: 'Let us do the pairing for you.', sub: 'Upload an image of your room and we will show you rugs to match.' };
    const btnProps = {};

    if (this.props.loading) {
      btnProps.disabled = true;
    }

    return (
      <div className="wrap">
        {!this.props.loading && !hasResults && <div className="margin--bottom-10">
          <h1>{heading.title}</h1>
          <h2 className="font-color--lighter">{heading.sub}</h2>
        </div>
        }
        {!hasResults && !this.props.loading && <DropZone single copy="Drop an image of your room here, or click to upload" receiveFiles={this.receiveFiles} />}
        <div className="flex-parent flex-align-center flex-justify-center pair-image-wrap">
          {(this.props.products.dataURL || this.state.dataURL) && (
            <div className="">
              <img src={this.state.dataURL || this.props.products.dataURL} />
            </div>
          )}
        </div>
        {this.props.loading && (
          <LoadingIndicator loading={this.props.loading} copy="Finding the perfect rugs." />
        )}



        {hasResults && (
          <div className="color-scheme-wrap margin--top-5">
            <form className="pair-form flex-col-break margin--bottom-0" onSubmit={this.submit}>
              <div style={{ width: '100%' }} className={classnames('form-group flex-1', { 'form-error': this.props.error })}>
                <div className="form-component">
                  <input
                    onChange={this.onChange}
                    className={classnames({
                      'input-filled': this.state.email,
                      'input-error': this.state.errors.email,
                    })}
                    name="email" value={this.state.email}
                    type="text"
                  />
                  <label htmlFor="email">Email</label>
                </div>
              </div>
              <div className="flex-col-break--m margin--top-3">
                {this.props.error && <p className="font-color--danger margin--bottom-3 small-caps">{this.props.error}</p>}
                <div>
                  <button {...btnProps} className="btn--primary--inverse">{btnProps.disabled ? 'Please Wait' : 'Save For Later'}</button>
                </div>
              </div>
            </form>
          </div>
        )}

        {hasResults && (
          <div className="color-scheme-wrap margin--y-5">
            {this.props.products.colors.map(color => (
              <div className="color-scheme-box" style={{ backgroundColor: `#${color}` }} />
            ))}
          </div>
        )}

        {hasResults && <div className="flex-parent flex-justify-center small-caps font-color--lighter">Reset</div>}


        {hasResults && <ProductList products={this.props.products.results.hits} />}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  products: state.pairedProducts,
  loading: state.loading.page === 'pair',
});

const mapDispatchToProps = dispatch => ({
  requestProducts({ blob, ext, mimeType, dataURL }) {
    dispatch(action(REQUEST_PAIR_START, { blob, ext, mimeType, dataURL }));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PairRoom);
