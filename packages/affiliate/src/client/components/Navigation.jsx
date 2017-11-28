import React from 'react';
import Svg from

function Navigation() {
  return (
    <nav>
      <div className="logo" style={{ zIndex: 11 }}>
        <Link to="/"><Svg variant="archadon-logo" color={navOpen ? '#FFF' : '#000'} /></Link>
      </div>
    </nav>
  )
}
