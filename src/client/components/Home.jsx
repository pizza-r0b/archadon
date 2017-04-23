import React from 'react';
import rug from 'Images/oriental-rug-splash.png';
import rug2 from 'Images/oriental-rug-splash-2.jpg';
import rug3 from 'Images/oriental-rug-splash-3.jpg';
import rug4 from 'Images/oriental-rug-splash-4.jpg';
import Canvas from './Canvas';
import ReactTransitionGroup from 'react-addons-transition-group';
import classnames from 'classnames';

const BLUE = '#166ED4';
const RED = '#E10C37';
const GREEN = '#82E10C';
const YELLOW = '#E1D40C';

class Slide extends React.Component {
  state = {}

  componentWillEnter(cb) {
    this.setState({
      active: true,
      leave: false,
      enter: true,
      wrapAnimationEnd: (event) => {
        if (event.animationName === 'enter') {
          cb();
        }
      },
      maskTransitionEnd: this.maskTransitionEnd,
    });
  }
  componentDidEnter() {

  }
  componentWillLeave(cb) {
    // add class to rotate mask and add transition end event to that rotation
    // that transition end event will trigger another function that will slide out
    // and fade out both canvases. That animation will have a transition end event
    // that will call the cb
    this.setState({
      active: true,
      rotate: true,
      enter: false,
      wrapAnimationEnd: (event) => {
        if (event.animationName === 'leave') {
          cb();
        }
      },
      maskTransitionEnd: this.maskTransitionEnd,
    });
  }
  componentDidLeave() {

  }
  maskTransitionEnd = () => {
    this.setState((prevState) => Object.assign({}, prevState, {
      leave: true,
      enter: false,
      maskTransitionEnd: null,
    }));
  }
  render() {
    const { item } = this.props;
    return (
      <div
        style={{ backgroundColor: item.backgroundColor }}
        onAnimationEnd={this.state.wrapAnimationEnd}
        className={
          classnames('canvas-wrap flex-grow-1 flex-parent flex-align-center flex-justify-center', {
            'canvas-wrap-leave': this.state.leave,
            'canvas-wrap-enter': this.state.enter,
            active: this.state.active,
          })
        }
      >
        <div
          className={classnames('canvas-wrap flex-grow-1 flex-parent flex-align-center flex-justify-center', {
            'canvas-fade active': this.state.leave,
          })}
        >
          <Canvas
            img={item.imageSrc}
            color={item.backgroundColor}
            className="original-canvas"
            width={615}
            height={409}
          />
          <Canvas
            img={item.imageSrc}
            color={item.backgroundColor}
            onTransitionEnd={this.state.maskTransitionEnd}
            className={classnames('masked-canvas', {
              'masked-canvas-rotate': this.state.rotate,
            })}
            mask
            width={615}
            height={409}
          />
        </div>
      </div>
    );
  }
}

class Home extends React.Component {

  state = {
    currentIndex: 0,
  }

  images = [
    {
      backgroundColor: BLUE,
      imageSrc: rug,
    },
    {
      backgroundColor: RED,
      imageSrc: rug2,
    },
    {
      backgroundColor: YELLOW,
      imageSrc: rug4,
    },
  ];

  constructor() {
    super();
    this.slides = this.createSlides();
  }

  incrementCount = () => {
    let index;
    if (this.state.currentIndex === this.images.length - 1) {
      index = 0;
    } else {
      index = this.state.currentIndex + 1;
    }
    this.setState({ currentIndex: index });
  }

  componentDidMount() {
    setInterval(() => {
      this.incrementCount();
    }, 5000);
  }

  createSlides = () => this.images.map((item, i) => <Slide key={i} item={item} />)

  render() {
    return (
      <ReactTransitionGroup component="div" style={{ position: 'relative', overflow: 'hidden' }} className="flex-parent flex-grow-1">
        {this.slides[this.state.currentIndex]}
      </ReactTransitionGroup>
    );
  }
}

export default Home;
