import React from 'react';

export default function LoadingIndicator({ loading }) {
  if (loading) {
    return (
      <div className="flex-parent flex-justify-center flex-col flex-align-center flex-grow-1 padding--x-5 loading-indicator-wrap">
        <div className="loading-indicator" />
        <h2>Loading</h2>
        {/*<p className="align--center">Please be patient. We are working on making this faster.</p>*/}
      </div>
    );
  } else {
    return null;
  }
}
