import React from 'react';
import background from 'Images/artisan-rug-home.jpg';

function Home() {
  console.log(background);
  return (
    <div
      className="flex-grow-1 home flex-parent flex-justify-center"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div className="flex-parent flex-col flex-align-center">
        <h1 className="headline">Handmade, artisan rugs</h1>
        <div className="jumbo-btn">Shop Selection</div>
      </div>
    </div>
  );
}

export default Home;
