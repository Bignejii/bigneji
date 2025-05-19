import React from 'react';
import { useLocation } from 'react-router-dom';
import Getall from './Getall';

function Products() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get('category');

  return (
    <div>
      <h1>Products</h1>
      <Getall category={category} />
    </div>
  );
}

export default Products;