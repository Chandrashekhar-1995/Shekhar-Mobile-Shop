import React from 'react';
import ProductCategoryCard from './Product/ProductCategoryCard';


const Shop = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Shop</h1>
      <div>
        <ProductCategoryCard/>
      </div>
    </div>
  );
};

export default Shop;
