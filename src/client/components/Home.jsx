import React from 'react';
import HomeSlider from './HomeSlider';

class Home extends React.Component {
  render() {
    return (
      <div style={{ width: '100%' }}>
        <div className="wrap">
          <HomeSlider />
        </div>
      </div>
    )
  }
}

export default Home;
