import React from 'react';

function HeroHeader({title, subtitle, src}) {
  return (
    <div className="collection-header global-padding">
      <div className="collection-header-title">
        <h1 className="align--center">{title}</h1>
        {subtitle && <h3 className="align--center">{subtitle}</h3>}
      </div>
      <div className="collection-header-img">
        <img src={src} />
      </div>
    </div>
  );
}

export default HeroHeader;
