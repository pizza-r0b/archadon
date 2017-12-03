import React from 'react';
import ItemList from '../containers/ItemList';
import ImagePreview from '../containers/ImagePreview';
import Edit from '../containers/Edit';

function Home() {
  return (
    <div>
      <ItemList />
      <ImagePreview />
      <Edit />
    </div>
  );
}

export default Home;
