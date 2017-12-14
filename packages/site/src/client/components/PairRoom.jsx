import React from 'react';
import { DropZone, readAsBase64 } from 'archadon-utils';
import mime from 'mime-types';
import actions from 'Actions';
import { action } from 'Utils';
import { connect } from 'react-redux';
import ProductList from 'Components/ProductList';
import LoadingIndicator from 'Components/LoadingIndicator';
import classnames from 'classnames';

const {
  REQUEST_PAIR_START,
  RESET_PAIR,
  SAVE_COLLECTION_START,
  REQUEST_SAVED_COLLECTION_START,
 } = actions;

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

const TYPE_WHITE_LIST = ['image/jpeg', 'image/png', 'image/jpeg', 'image/gif'];

class PairRoom extends React.Component {

  state = {}

  async _receiveFiles([file]) {
    const mimeType = file.type;
    if (!TYPE_WHITE_LIST.includes(mimeType)) {
      this.setState({ error: 'Please upload and .jpg or .png file' });
      return;
    }
    const { dataURL } = await readAsBase64(file);
    this.setState({ dataURL });
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
    errors: {},
    step: this.props.match.params.id || (this.props.products.results.hits && this.props.products.results.hits.length > 0) ? 'upload' : 'intro',
  }

  onChange = ({ currentTarget: { value, name: key } }) => {
    this.setState({ [key]: value });
  }

  reset = () => {
    this.setState({ dataURL: void 0, step: 'intro' });
    this.props.reset();
  }

  isValid = () => {
    const errors = [];

    if (!emailRegex.test(this.state.email)) {
      errors.push({ email: true });
    }

    const valid = errors.length === 0;

    if (!valid) {
      this.setState({
        errors: errors.reduce((a, b) => { return { ...a, ...b } }, {}),
      });
    }

    return errors.length === 0;
  }

  componentDidMount() {
    const hasResults = this.props.products.results.hits && this.props.products.results.hits.length > 0;
    if (this.props.match.params.id && !hasResults) {
      this.setState({ step: 'upload' });
      this.props.requestCollection(this.props.match.params.id);
    }
  }

  submit = (e) => {
    e.preventDefault();
    if (this.isValid()) {
      this.props.saveCollection(
        this.state.email,
        this.props.products.fileName,
        this.props.products.filters,
        this.props.products.colors
      );
    }
  }


  receiveFiles = this._receiveFiles.bind(this)

  getIntro = () => {
    return (
      <div className="pair-intro">
        <h1 className="font-weight--800 align--center">Artificial Intelligence</h1>
        <h1 className="font-weight--800 align--center">+</h1>
        <h1 className="font-weight--800 align--center">Rugs</h1>

        <div className="flex-parent flex-align-center flex-justify-center flex-col pair-intro-sub">
          <h2 className="margin--y-5 font-color--lighter">Upload a photo of your room and let AI pick the perfect rugs.</h2>
          <div onClick={() => {
            this.setState({ step: 'upload' });
          }}className="btn--primary--inverse">Upload Photo</div>
        </div>
      </div>
    );
  }

  render() {
    const hasResults = this.props.products.results.hits && this.props.products.results.hits.length > 0;
    const btnProps = {};

    btnProps.disabled = this.props.products.savingEmail === 'end';

    let markup;

    switch (this.state.step) {
      case 'intro':
        markup = this.getIntro();
        break;
      case 'upload':
        markup = (
          <div className="wrap">


            {this.state.error && <p className="font-color--danger small-caps">{this.state.error}</p>}
            {this.props.products.collectionRequest === 'error' && <h2 className="font-color--danger margin--y-5">Uh oh! We couldn't find what you're looking for. Upload your image again.</h2>}
            {!hasResults && !this.props.loading && <DropZone fileInputProps={{ accept: '.jpg, .png, .gif' }} single copy="Drop an image of your room here, or click to upload" receiveFiles={this.receiveFiles} />}
            <div className="flex-parent flex-align-center flex-justify-center pair-image-wrap">
              {(this.props.products.dataURL || this.state.dataURL || this.props.products.fileName) && (
                <div className="">
                  <img src={this.state.dataURL || this.props.products.dataURL || `https://s3.amazonaws.com/archadon-user/${this.props.products.fileName}`} />
                </div>
              )}
            </div>
            {this.props.loading && (
              <div className="margin--top-5">
                <LoadingIndicator loading={this.props.loading} copy="Finding the perfect rugs." />
              </div>
            )}

            {hasResults && (
              <div className="color-scheme-wrap margin--y-5">
                {this.props.products.colors.map(color => (
                  <div className="color-scheme-box" style={{ backgroundColor: `#${color}` }} />
                ))}
              </div>
            )}

            {hasResults && this.props.products.savingEmail !== 'end' && (
              <div className="color-scheme-wrap margin--y-5">
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
                      <button {...btnProps} className="btn--primary--inverse">{this.props.products.savingEmail ? 'Please Wait' : 'Save For Later'}</button>
                    </div>
                  </div>
                </form>
              </div>
            )}

            {hasResults && this.props.products.savingEmail === 'end' && (
              <p className="align--center font-color--success margin--y-5">We've emailed you a link to return to this page!</p>
            )}

            {hasResults && <div onClick={this.reset} style={{ cursor: 'pointer' }} className="flex-parent flex-justify-center small-caps font-color--lighter">Reset</div>}

            {hasResults && (
              <div>
                <h2 className="margin--top-5 align--center">Here's 50 rugs picked just for you!</h2>
                <ProductList products={this.props.products.results.hits} />
              </div>
            )}
          </div>
        );
    }

    return markup;
  }
}

const mapStateToProps = state => ({
  products: state.pairedProducts,
  loading: state.loading.page === 'pair' || state.pairedProducts.collectionRequest === 'started',
  savingEmail: state.pairedProducts.savingEmail,
});

const mapDispatchToProps = dispatch => ({
  requestProducts({ blob, ext, mimeType, dataURL }) {
    dispatch(action(REQUEST_PAIR_START, { blob, ext, mimeType, dataURL }));
  },
  reset() {
    dispatch(action(RESET_PAIR));
  },
  saveCollection(email, imageKey, filters, colors) {
    dispatch(action(SAVE_COLLECTION_START, {
      email, imageKey, filters, colors,
    }));
  },
  requestCollection(id) {
    dispatch(action(REQUEST_SAVED_COLLECTION_START, id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PairRoom);
