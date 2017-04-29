import React, { PropTypes } from 'react';
import ReactTransitionGroup from 'react-addons-transition-group';
import classnames from 'classnames';
import rug1 from 'Images/rug1.png';

class Canvas extends React.Component {

  static propTypes = {
    img: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  }

  drawImageToCanvas = (img) => {
    const ctx = this.canvas.getContext('2d');
    ctx.save();
    ctx.globalAlpha = 0.15;
    ctx.drawImage(img, - this.canvas.width / 2, - this.canvas.height / 2);
    ctx.restore();
  }

  drawColorOverlay = () => {
    const canvas = document.createElement('canvas');
    canvas.width = this.canvas.width;
    canvas.height = this.canvas.height;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = this.props.color;
    ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    const drawingCtx = this.canvas.getContext('2d');
    drawingCtx.save();
    drawingCtx.globalCompositeOperation = 'color';
    drawingCtx.drawImage(canvas, 0, 0);
    drawingCtx.restore();
  }

  loadImage = () => {
    const img = document.createElement('img');

    img.addEventListener('load', () => {
      this.drawImageToCanvas(img);
      this.drawColorOverlay();
    });

    img.src = this.props.img;
  }

  componentDidMount() {

    this.loadImage();

    // load image to canvas
    // add color overlay

  }

  getRef = c => {
    this.canvas = c;
  }
  render() {
    return (
      <canvas ref={this.getRef} />
    );
  }
}

class Home extends React.Component {

  constructor() {
    super();
  }


  render() {
    return (
      <ReactTransitionGroup component="div" style={{ position: 'relative', overflow: 'hidden' }} className="flex-parent flex-grow-1 home-transition-group">
        <div className="flex-parent flex-grow-1 home-slide-flex">
          <div className="home-slide-box">hey</div>
          <div className="home-slide-box home-slide-img-box">
            <img className="home-slide-img" src={rug1} />
          </div>
          <div className="home-slide-box">hi</div>
        </div>
        <div className="home-slide-bg">
          <Canvas img={rug1} color="#4AD84C" />
        </div>
      </ReactTransitionGroup>
    );
  }
}

export default Home;
