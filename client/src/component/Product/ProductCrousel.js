import React from 'react';
import { ROBOTEK_5C, CCR35, SC221 } from "../../utils/productData";

const ProductCrousel = () => {
  return (
    <div className='flex "max-w-7xl mx-auto px-4 py-8 bg-white overflow-x-scroll '>
       <img src={ROBOTEK_5C} alt="Image_3"/>
       <img src={CCR35} alt="Image_3"/>
      <img src={SC221} alt="Image_3"/>
      <img src={ROBOTEK_5C} alt="Image_3"/>
      <img src={ROBOTEK_5C} alt="Image_3"/>
       <img src={CCR35} alt="Image_3"/>
      <img src={SC221} alt="Image_3"/>
      <img src={ROBOTEK_5C} alt="Image_3" />
      <img src={ROBOTEK_5C} alt="Image_3"/>
       <img src={CCR35} alt="Image_3"/>
      <img src={SC221} alt="Image_3"/>
      <img src={ROBOTEK_5C} alt="Image_3"/>
      <img src={ROBOTEK_5C} alt="Image_3"/>
       <img src={CCR35} alt="Image_3"/>
      <img src={SC221} alt="Image_3"/>
      <img src={ROBOTEK_5C} alt="Image_3"/>
    </div>
  )
}

export default ProductCrousel