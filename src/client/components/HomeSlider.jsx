import React from 'react';
import { IMAGE_ORIGIN } from 'Constants';
import { CSSTransitionGroup } from 'react-transition-group';

// Name: 3'1x5'1 | Width: | Height: 5.1 | Price: 344.74 | Qty: 1
// Short Description: 100 knot
// Long Description: Tibetan WoolID: 59bdbf4f857c5b78b3a4c440
// SKU: 3.1x5.1_32438_29431

// Name: 6x9 | Width: | Height: 9 | Price: 756 | Qty: 1
// Short Description: Soumak (Flatweave)
// Long Description: New Zealand WoolID: 59bdbf4f857c5b78b3a4c4f0
// SKU: 6x9_S_2081_50

// Name: 6'1x9'1 | Width: | Height: 9.1 | Price: 756 | Qty: 1
// Short Description: Soumak (Flatweave)
// Long Description: New Zealand WoolID: 59bdbf4f857c5b78b3a4c49d
// SKU: 6.1x9.1_S_2090_59

// Name: 6x9 | Width: | Height: 9 | Price: 1134 | Qty: 1
// Short Description: 100 knot
// Long Description: Tibetan WoolID: 59bdbf4f857c5b78b3a4c4ee
// SKU: 6x9_32963_29737

const images = [
  {
    headline: 'Headline 1',
    i: 0,
    title: 'Soumak Weave',
    subtitle: 'One of a kind',
    image: `${IMAGE_ORIGIN}/3.1x5.1_32438_29431.jpg`,
    id: '59bdbf4f857c5b78b3a4c440',
  },
  {
    headline: 'Headline 2',
    i: 1,
    title: 'Title',
    subtitle: 'Sub Title',
    image: `${IMAGE_ORIGIN}/6x9_S_2081_50.jpg`,
    id: '59bdbf4f857c5b78b3a4c4f0',
  },
  {
    headline: 'Headline 3',
    i: 2,
    title: 'Title',
    subtitle: 'Sub Title',
    image: `${IMAGE_ORIGIN}/6.1x9.1_S_2090_59.jpg`,
    id: '59bdbf4f857c5b78b3a4c49d',
  },
  {
    headline: 'Headline 4',
    i: 3,
    title: 'Title',
    subtitle: 'Sub Title',
    image: `${IMAGE_ORIGIN}/6x9_32963_29737.jpg`,
    id: '59bdbf4f857c5b78b3a4c4ee',
  },
];


class HomeSlider extends React.Component {
  state = {
    current: 0,
    headlines: images.filter((img, i) => i !== 0),
    line: true,
  }

  interval = (callback, delay) => {
    const tick = now => {
      if (now - start >= delay) {
        start = now;
        callback();
      }
      requestAnimationFrame(tick);
    };
    let start = performance.now();
    return requestAnimationFrame(tick);
  }

  getHeadlines = (current) => images.filter((img, i) => i !== current)

  updateState = (current, cb) => {
    this.setState({
      headlines: this.getHeadlines(current),
      current,
    }, cb);
  }

  startInterval = () => {
    this.interval = this.interval(() => {
      const current = this.state.current === images.length - 1 ? 0 : this.state.current + 1;
      this.line.classList.remove('grow');
      this.updateState(current, () => {
        setTimeout(() => {
          this.line.classList.add('grow');
        }, 25);
      });
    }, 8000);
    setTimeout(() => {
      this.line.classList.add('grow');
    }, 25);
  }

  componentDidMount() {
    this.startInterval();
  }

  headlineClick = i => () => {
    this.line.classList.remove('grow');
    this.updateState(i, this.startInterval);
  }

  render() {
    return (
      <div>
        <div className="home-slider">
          <div className="home-slider-item">
            <div className="headlines">
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
                <div ref={c => { this.line = c; }} className='line--inner' />
              </div>
              <CSSTransitionGroup
                transitionName="homeslider-headline-transition"
                transitionEnterTimeout={920}
                transitionLeaveTimeout={920}
                className="trans-wrap headline-links"
              >
                <div key={this.state.current} className="headline-links-wrap">
                  {this.state.headlines.map((item) => (
                    <div onClick={this.headlineClick(item.i)} className="headline-link">{item.headline}</div>
                  ))}
                </div>

              </CSSTransitionGroup>
            </div>
          </div>
          <div className="featured-img img home-slider-item">
            <div className="inner" style={{ backgroundImage: `url(${images[this.state.current].image})` }} />
          </div>
          <div className="home-slider-item">
            <div className="home-slider-cta">
              <h3>{images[0].subtitle}</h3>
              <h2 className="margin--top-2 margin--bottom-5">{images[0].title}</h2>
              <a href="#" className="btn btn--primary">View Rug</a>
            </div>
          </div>
        </div>
        <div className="home-slider-btns">

        </div>
      </div>
    );
  }
}

export default HomeSlider;
