import React from 'react';
import GridCardLayout from './GridCardLayout';
import ProductCrousel from "./ProductCrousel";

const ProductCategoryCard = () => {
  return (
    <div className=''>
      <div className='bg-gradient-to-t from-blue-300 to-fuchsia-300'>
        <GridCardLayout />
      </div>
      <ProductCrousel />
      <GridCardLayout />
    </div>
  )
}

export default ProductCategoryCard 