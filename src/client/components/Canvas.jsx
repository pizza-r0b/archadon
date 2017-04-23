import React from 'react';

class Canvas extends React.Component {

  drawImgToCanvas = (img) => {
    const ctx = this.canvas.getContext('2d');
    ctx.drawImage(img, 0, 0, this.props.width, this.props.height);
  }

  addColorOverlay = () => {
    const overlayCanvas = this.getCanvas();
    const ctx = overlayCanvas.getContext('2d');
    const originalCtx = this.canvas.getContext('2d');
    ctx.fillStyle = this.props.color;
    ctx.fillRect(0, 0, this.props.width, this.props.height);

    originalCtx.globalCompositeOperation = 'color';

    originalCtx.drawImage(overlayCanvas, 0, 0, this.props.width, this.props.height);
  }

  getCanvas = () => {
    const c = document.createElement('canvas');
    c.width = this.props.width;
    c.height = this.props.height;
    return c;
  }

  maskImage = () => {
    const mask = this.getCanvas();
    const ctx = mask.getContext('2d');
    ctx.rect(0, 0, this.props.width, this.props.height);
    ctx.lineWidth = 100;
    ctx.stroke();

    const originalCtx = this.canvas.getContext('2d');

    originalCtx.globalCompositeOperation = 'destination-atop';

    originalCtx.drawImage(mask, 0, 0, this.props.width, this.props.height);


    const shadow = this.getCanvas();
    const shadowCtx = shadow.getContext('2d');
    shadowCtx.rect(0, 0, this.props.width, this.props.height);
    shadowCtx.shadowColor = 'rgba(0, 0, 0, 50)';
    shadowCtx.shadowBlur = 30;
    shadowCtx.lineWidth = 100;
    shadowCtx.stroke();

    originalCtx.globalCompositeOperation = 'destination-over';

    originalCtx.drawImage(shadow, 0, 0, this.props.width, this.props.height);
  }

  componentDidMount() {
    const img = document.createElement('img');

    img.addEventListener('load', () => {
      this.drawImgToCanvas(img);
      this.addColorOverlay();
      if (this.props.mask) {
        this.maskImage();
      }
    });

    img.src = this.props.img;
  }
  render() {
    const {
      className,
      width,
      height,
      onTransitionEnd,
    } = this.props;
    return (
      <canvas className={className} width={width} height={height} onTransitionEnd={onTransitionEnd} ref={c => { this.canvas = c; }} />
    );
  }
}

export default Canvas;
