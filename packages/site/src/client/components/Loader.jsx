import React from 'react';
import classnames from 'classnames';

export default class Loader extends React.Component {

  state = {
    done: true,
  }

  componentWillUpdate(nextProps) {
    if (!this.props.loading && nextProps.loading && this.state.done) {
      console.log('GO!')
      this.setState({ done: false });
    }
  }

  handleEnd = e => {
    if (e.animationName === 'slideup') {
      this.setState({ slidedown: true });
    } else if (e.animationName === 'slidedown') {
      this.setState({
        done: true,
        slidedown: false,
      }, () => {
        this.props.done();
      });
    }
  }

  render() {
    return (
      <div className={classnames('loader', { isLoading: !this.state.done })}>
        <div style={this.state.slidedown ? { opacity: 0 } : null} className="loader-overlay" />
        <div onAnimationEnd={this.handleEnd} className={classnames('slide', {
          slideup: !this.state.done,
          slidedown: this.state.slidedown,
        })} />
      </div>
    );
  }
}
