import React, { PropTypes } from 'react';
import ReactTransitionGroup from 'react-addons-transition-group';
import classnames from 'classnames';
import rug1 from 'Images/rug1.png';
import rug2 from 'Images/rug2.png';
import rug3 from 'Images/rug3.png';
import Shop from 'Components/Shop';

class Canvas extends React.Component {

  static propTypes = {
    img: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  }

  drawImageToCanvas = (img) => {
    const ctx = this.canvas.getContext('2d');
    ctx.save();
    ctx.globalAlpha = 0.15;
    ctx.drawImage(img, - this.canvas.width / 2, - this.canvas.height / 2, img.width / 2, img.height / 2);
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
      if (!this.canvas) return;
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

const FEATURED_RUGS = [
  {
    name: 'Theo',
    id: '1',
    size: '6x12',
    country: 'Persia',
    src: rug1,
  },
  {
    name: 'Jenni',
    id: '2',
    size: '6x12',
    country: 'Persia',
    src: rug2,
  },
  {
    name: 'Jenni',
    id: '2',
    size: '6x12',
    country: 'Persia',
    src: rug3,
  },
];

const COLORS = ['#42D044', '#2D76CE', '#5C3D6D'];

class Slide extends React.Component {

  state = {}

  componentWillAppear(cb) {
    this.setState({
      entering: true,
      appear: true,
    });
    cb();
  }

  componentWillEnter(cb) {
    this.setState({
      entering: true,
      appear: false,
    });
    cb();
  }

  animationEndFunc = (cb, name) => (e) => {
    if (e.animationName === name) {
      cb();
    }
  }

  componentWillLeave(cb) {
    this.setState({
      imgAnimationEndFunc: this.animationEndFunc(cb, 'slideLeave'),
      leaving: true,
      entering: false,
      appear: false,
    });
  }
  render() {
    const { img, color, Cta } = this.props;
    return (
      <div
        onAnimationEnd={this.state.imgAnimationEndFunc}
        className={classnames('animation-wrap', {
          leaving: this.state.leaving,
          entering: this.state.entering && !this.state.appear,
        })}
      >
        <div
          className={classnames('flex-parent flex-grow-1 slide-wrap', {

          })}
        >
          <div className="flex-parent flex-grow-1 home-slide-flex">
            <div className="home-slide-box">
              <Cta />
            </div>
            <div className="home-slide-box home-slide-img-box">
              <img
                className={classnames('home-slide-img', {
                  leaving: this.state.leaving,
                  entering: this.state.entering,
                })}
                src={img}
              />
            </div>
            <div className="home-slide-box">

            </div>
          </div>
          <div className="home-slide-bg">
            <Canvas img={img} color={color} />
          </div>
        </div>
      </div>
    );
  }

}

const interval = (callback, delay, arr) => {
  const tick = now => {
    if (now - start >= delay) {
      start = now;
      callback();
    }
    arr.push(requestAnimationFrame(tick));
  };
  let start = performance.now();
  arr.push(requestAnimationFrame(tick));
};

const DURATION = 3500;

class Home extends React.Component {

  constructor() {
    super();
  }

  state = {
    currentIndex: 0,
  }

  scroll = () => {
    if (this.velocityScroll) {
      this.velocityScroll();
    }
  }

  Cta = () => (
    <div className="flex-parent flex-col flex-align-center">
      <h1 className="font-color--white align--center">
        Handmade, <span style={{ display: 'block' }}>artisan rugs</span>
      </h1>
      <button onClick={this.scroll} className="btn btn--white margin--top-5">Shop Selection</button>
    </div>
  )

  updateSlide = () => {
    let currentIndex;
    if (this.state.currentIndex < this.slides.length - 1) {
      currentIndex = this.state.currentIndex + 1;
    } else {
      currentIndex = 0;
    }
    this.setState({ currentIndex });
  }

  int = [];

  componentDidMount() {
    import('velocity-animate').then(Velocity => {
      this.velocityScroll = () => {
        Velocity(this.selection, 'scroll', {
          duration: 1000,
          easing: 'easeOutExpo',
        });
      };
    });
    interval(this.updateSlide, DURATION, this.int);
  }

  componentWillUnmount() {
    this.int.forEach(int => window.cancelAnimationFrame(int));
  }

  slides = FEATURED_RUGS.map((obj, i) => <Slide key={i} img={obj.src} Cta={this.Cta} color={COLORS[i]} />)

  render() {
    const { Cta } = this;
    return (
      <div className="flex-parent flex-grow-1 flex-col">
        <ReactTransitionGroup
          component="div"
          style={{
            transform: 'translate3d(0,0,0)',
            position: 'relative',
            overflow: 'hidden',
            minHeight: '100%',
          }}
          className="flex-parent flex-grow-1 home-transition-group"
        >
          {this.slides[this.state.currentIndex]}
        </ReactTransitionGroup>
        <section className="content-section">
          <div className="content">
            <h1>I was inspired by the integrity and simple grace of the Tibetan people.</h1>
            <p className="margin--top-3">We knew little of one another and yet, we saw many things in the same way. You will see this in the way we create rugs: attention to detail, dedication to craft. Only traditional methods and the finest hand spun Tibetan wool will do. Like the integrity that defines a culture, there is integrity in this rug. It is born of pure craftsmanship. There is a magical quality too. It's in the colors, the design. It is the look of today: exciting, stirring, vital. The union of two worlds: a modern face with a soul that reaches far back in time. The only difference between this rug and other works of art is that you walk on it, you live with it, it becomes part of you. Inspiration that lasts a lifetime.</p>
          </div>
        </section>
        <div ref={c => { this.selection = c; }}>
          <Shop />
        </div>
      </div>
    );
  }
}

export default Home;
