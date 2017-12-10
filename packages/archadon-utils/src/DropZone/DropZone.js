import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './styles.scss';

const ANIMATION_DURATION = 0;

class BatchDropZone extends React.Component {

  static propTypes = {

    // function that recieves an array of files
    receiveFiles: PropTypes.func.isRequired,

    // will be passed as second argument of receiveFiles function if present
    id: PropTypes.string,

    // if single is set then file input will NOT be multiple
    single: PropTypes.bool,

    // text message that will appear in drop zone
    copy: PropTypes.string,

    // additional classes that will be added to the drop zone wrapper
    className: PropTypes.string,
  }

  state = {}

  handleDragOver = e => {
    e.preventDefault();
    if (this.state.inDropZone) {
      return;
    }
    this.setState({ inDropZone: true });
  }

  handleDrop = e => {
    e.preventDefault();
    const { dataTransfer } = e;
    const files = [];
    if (dataTransfer.items) {
      for (let i = this.props.single ? dataTransfer.items.length - 1 : 0; i < dataTransfer.items.length; i++) {
        if (dataTransfer.items[i].kind == "file") {
          const file = dataTransfer.items[i].getAsFile();
          files.push(file);
        }
      }
    } else {
      for (let i = this.props.single ? dataTransfer.files.length - 1 : 0; i < dataTransfer.files.length; i++) {
        files.push(dataTransfer.files[i]);
      }
    }
    this.setState({
      uploading: true,
    });
    setTimeout(() => {
      this.setState({
        uploading: false,
        inDropZone: false,
      });
      this.props.receiveFiles(files, this.props.id);
    }, ANIMATION_DURATION);
  }

  handleDragLeave = () => {
    if (!this.state.inDropZone) return;
    this.setState({ inDropZone: false });
  }

  handleClick = () => this.fileInput && this.fileInput.click();

  handleFilesFromInput = (e) => {
    const files = [];
    Array.from(e.currentTarget.files).forEach(file => {
      files.push(file);
    });
    this.setState({
      uploading: true,
    });
    setTimeout(() => {
      this.setState({
        uploading: false,
        inDropZone: false,
      });
      this.props.receiveFiles(files, this.props.id);
    }, ANIMATION_DURATION);
  }

  render() {
    const classes = classNames(`drop-it-wrap batch ${this.props.className || ''}`, {
      active: this.state.inDropZone,
      uploading: this.state.uploading,
    });

    const dropEvents = {
      onDrop: this.handleDrop,
      onDragOver: this.handleDragOver,
      onDragLeave: this.handleDragLeave,
      onClick: this.handleClick,
    };

    let err;

    if (this.state.error) {
      err = (
        <div className="notification danger">
          {this.state.error}
        </div>
      );
    }

    const fileInputAttrs = {
      ref: (c) => { this.fileInput = c; },
      type: 'file',
      onChange: this.handleFilesFromInput,
      style: { position: 'absolute', left: -99999999 },
    };

    if (!this.props.single) {
      fileInputAttrs.multiple = true;
    }

    return (
      <div style={{ width: '100%' }}>
        {err}
        <div className={classes} {...dropEvents}>
          <div className="loader">
            Processing ...
          </div>
          <input {...fileInputAttrs} />
          <div style={{ textAlign: 'center' }} className="default">
            {this.props.copy || 'Drop image files here or click'}
          </div>
        </div>
      </div>
    );
  }
}

export default BatchDropZone;
