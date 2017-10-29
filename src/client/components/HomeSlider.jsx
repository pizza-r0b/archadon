import React from 'react';
import { IMAGE_ORIGIN } from 'Constants';
import { CSSTransitionGroup } from 'react-transition-group';
import classnames from 'classnames';
import { throttle } from 'Utils';
import ProductDetailLink from 'Components/ProductDetailLink';

const images = [
  {
    headline: 'Arty',
    title: 'Floor Art',
    subtitle: 'Bold, beautiful',
    image: `${IMAGE_ORIGIN}/6x9_32963_29737.jpg`,
    id: '59bdbf4f857c5b78b3a4c4ee',
  },
  {
    headline: 'Abstract',
    title: 'Wild imaginations',
    subtitle: 'A canvas for',
    image: `${IMAGE_ORIGIN}/3.1x5.1_32438_29431.jpg`,
    id: '59bdbf4f857c5b78b3a4c440',
  },
  {
    headline: 'Classic',
    title: 'For classic people',
    subtitle: 'Classic styles',
    image: `${IMAGE_ORIGIN}/6x9_S_2081_50.jpg`,
    id: '59bdbf4f857c5b78b3a4c4f0',
  },
  {
    headline: 'Contemporary',
    title: 'Off the beaten path',
    subtitle: 'A little bit',
    image: `${IMAGE_ORIGIN}/6.1x9.1_S_2090_59.jpg`,
    id: '59bdbf4f857c5b78b3a4c49d',
  },
].map((image, i) => ({ ...image, ...{ i } }));

class HomeSlider extends React.Component {

  state = {
    current: 0,
    headlines: images.filter((img, i) => i !== 0),
    line: true,
  }

  loops = []

  interval = (callback, delay) => {
    const tick = now => {
      if (now - start >= delay) {
        start = now;
        callback();
      }
      this.loops.push(requestAnimationFrame(tick));
    };
    let start = performance.now();
    this.loops.push(requestAnimationFrame(tick));
  }

  getHeadlines = (current) => images.filter((img, i) => i !== current)

  updateState = (current, cb) => {
    this.setState({
      headlines: this.getHeadlines(current),
      start: true,
      current,
    }, () => {
      // set timeout to give DOM time to remove before adding class
      setTimeout(() => {
        this.line.classList.add('grow');
      }, 25);
      if (typeof cb === 'function') {
        cb();
      }
    });
  }

  startInterval = () => {
    if (this.loops) {
      this.loops.forEach(id => window.cancelAnimationFrame(id));
      this.loops = [];
    }

    this.interval(() => {
      const current = this.state.current === images.length - 1 ? 0 : this.state.current + 1;
      this.line.classList.remove('grow');
      this.updateState(current);
    }, 8000);
  }

  componentWillUnmount() {
    this.loops.forEach(id => window.cancelAnimationFrame(id));
  }

  componentDidMount() {
    this.startInterval();
    this.line.classList.add('grow');
  }

  headlineClick = i => throttle(() => {
    this.line.classList.remove('grow');
    this.updateState(i, this.startInterval);
  }, 300, this);

  render() {
    return (
      <div>
        <div className="home-slider">
          <div className="home-slider-item">
            <div className="headlines">
              <h2>What's your style?</h2>
              <CSSTransitionGroup
                transitionName="homeslider-headline-transition"
                transitionEnterTimeout={920}
                transitionLeaveTimeout={920}
                component="div"
                className="trans-wrap"
              >
                <h1 className="main-headline" key={images[this.state.current].id}>{images[this.state.current].headline}</h1>
              </CSSTransitionGroup>
              <div className="line">
                <div ref={c => { this.line = c; }} className="line--inner" />
              </div>
              <CSSTransitionGroup
                transitionName="homeslider-headline-transition"
                transitionEnterTimeout={920}
                transitionLeaveTimeout={920}
                className="trans-wrap headline-links"
              >
                <div key={this.state.current} className="headline-links-wrap">
                  {this.state.headlines.map((item) => (
                    <div key={item.id} onClick={this.headlineClick(item.i)} className="headline-link">{item.headline}</div>
                  ))}
                </div>

              </CSSTransitionGroup>
            </div>
          </div>
          <div className="img home-slider-item">
            <CSSTransitionGroup
              transitionName="featured-image-transition"
              transitionEnterTimeout={1000}
              transitionLeaveTimeout={1000}
              component="div"
              className="featured-img"
            >
              <div key={images[this.state.current].id} className="inner" style={{ backgroundImage: `url(${images[this.state.current].image})` }} />
            </CSSTransitionGroup>
          </div>
          <div className="home-slider-item">
            <div className="home-slider-cta">
              <div>
                <CSSTransitionGroup
                  transitionName="featured-image-transition"
                  transitionEnterTimeout={1000}
                  transitionLeaveTimeout={1000}
                  component="div"
                  className="featured-img"
                >
                  <div key={images[this.state.current].id}>
                    <h3>{images[this.state.current].subtitle}</h3>
                    <h2 className="margin--top-2 margin--bottom-5">{images[this.state.current].title}</h2>
                  </div>
                </CSSTransitionGroup>
              </div>
              <div>
                <ProductDetailLink product={{ Name: 'featured', _id: images[this.state.current].id }} className="btn btn--primary">View Rug</ProductDetailLink>
              </div>
            </div>
          </div>
        </div>
        <div className="home-slider-btns">
          {images.map((item, i) => (
            <div key={item.id} onClick={this.headlineClick(i)} className={classnames('ball', { active: images[this.state.current].id === item.id })} />
          ))}
        </div>
      </div>
    );
  }
}

export default HomeSlider;
