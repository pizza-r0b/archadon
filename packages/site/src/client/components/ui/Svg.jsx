import React from 'react';

function Svg({ variant, color }) {
  return (
    <svg width="100%" height="100%" style={{ color: color || '#FFFFFF' }}>
      <use xlinkHref={`#${variant}`} />
    </svg>
  );
}

Svg.propTypes = {
  variant: React.PropTypes.string.isRequired,
  color: React.PropTypes.string,
};

export default Svg;
