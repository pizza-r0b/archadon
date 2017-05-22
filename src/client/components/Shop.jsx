import React from 'react';
import ProductList from 'Components/ProductList';

function Selection() {
  return (
    <div className="flex-grow-1 global-padding margin--y-10">
      <h1 className="align--center">Our Selection</h1>
      <ProductList />
    </div>
  );
}

export default Selection;

