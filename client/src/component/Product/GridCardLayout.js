import React from 'react';
import Category from './Category';
import { ROBOTEK_5C, CCR35, SC221 } from "../../utils/productData";

const GridCardLayout = () => {
  return (
    <div>
      <section className="flex items-center justify-center py-16 bg-gray-200">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">

            <div className="md:w-1/4  m-2 bg-white cursor-pointer hover:scale-110 transition">
                <h2 className="text-xl font-semibold mb-4">Appliances for your home | Up to 55% off</h2>
                    <div className='grid grid-cols-2 gap-4'>
                        <Category name={CCR35} />
                        <Category name={SC221} />
                        <Category name={ROBOTEK_5C} />
                        <Category name={CCR35} />
                    </div>
                <a href="#" className="text-blue-600 mt-4 inline-block">See more</a>
            </div>
                  
            <div className="md:w-1/4  m-2 bg-white cursor-pointer hover:scale-110 transition">
                <h2 className="text-xl font-semibold mb-4">Appliances for your home | Up to 55% off</h2>
                    <div className='grid grid-cols-2 gap-4'>
                        <Category name={CCR35} />
                        <Category name={SC221} />
                        <Category name={ROBOTEK_5C} />
                        <Category name={CCR35} />
                    </div>
                <a href="#" className="text-blue-600 mt-4 inline-block">See more</a>
            </div>
                  
                  <div className="md:w-1/4  m-2 bg-white cursor-pointer hover:scale-110 transition">
                <h2 className="text-xl font-semibold mb-4">Appliances for your home | Up to 55% off</h2>
                    <div className='grid grid-cols-2 gap-4'>
                        <Category name={CCR35} />
                        <Category name={SC221} />
                        <Category name={ROBOTEK_5C} />
                        <Category name={CCR35} />
                    </div>
                <a href="#" className="text-blue-600 mt-4 inline-block">See more</a>
                  </div>
                  
                  <div className="md:w-1/4  m-2 bg-white cursor-pointer hover:scale-110 transition">
                <h2 className="text-xl font-semibold mb-4">Appliances for your home | Up to 55% off</h2>
                    <div className='grid grid-cols-2 gap-4'>
                        <Category name={CCR35} />
                        <Category name={SC221} />
                        <Category name={ROBOTEK_5C} />
                        <Category name={CCR35} />
                    </div>
                <a href="#" className="text-blue-600 mt-4 inline-block">See more</a>
                  </div>
                  

          
        </div>
      </section>
    </div>
  )
}

export default GridCardLayout