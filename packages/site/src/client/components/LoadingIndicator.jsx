import React from 'react';

export default function LoadingIndicator({ loading, copy }) {
  if (loading) {
    return (
      <div className="flex-parent flex-justify-center flex-col flex-align-center flex-grow-1 padding--x-5 loading-indicator-wrap">
        <div className="loading-indicator" />
        <h2>Loading</h2>
        {copy && <p className="align--center">{copy}</p>}
      </div>
    );
  } else {
    return null;
  }
}
