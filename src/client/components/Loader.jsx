import React from 'react';

export default function Loader() {
  return (
    <div className="loader">
      <div className="box-wrap">
        <div className="box">
          <div className="side back" />
          <div className="side right" />
          <div className="side front" />
          <div className="side left" />
          <div className="side bottom" />
          <div className="side top" />
        </div>
      </div>
      <h2 className="font-color--white" style={{ bottom: '10%', position: 'absolute' }}>Weaving Rugs Please Wait</h2>
    </div>
  );
}
