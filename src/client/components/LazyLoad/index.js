import React from 'react';
import { findDOMNode } from 'react-dom';

export default class LazyLoad extends React.Component {
  lazyRefs = [];

  componentDidMount() {
    import('./observer').then(({ default: observe, observer }) => {
      this.observer = observer;
      this.lazyRefs.forEach(child => {
        if (child) {
          const src = child.dataset.src;
          if (src) {
            observe(findDOMNode(child));
          }
        }
      });
    });
  }

  componentWillUnmount() {
    this.lazyRefs.forEach(node => {
      if (node) {
        this.observer.unobserve(node);
      }
    });
  }

  clone = child => React.cloneElement(child, { ref: (c) => { this.lazyRefs.push(c); } });

  getChildren = () => {
    if (Array.isArray(this.props.children)) {
      return this.props.children.map(this.clone);
    } else {
      return this.clone(this.props.children);
    }
  }

  render() {
    return <span>{this.getChildren()}</span>;
  }
}
