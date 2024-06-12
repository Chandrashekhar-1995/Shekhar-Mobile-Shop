import React from 'react'
import GridCardLayout from './GridCardLayout'

const ProductCategoryCard = () => {
  return (
    <div>
      <GridCardLayout/>
    </div>

    
    // <div className="max-w-7xl mx-auto px-4 py-8">
      
    //   {/* Appliances Section */}
    //   <section className="flex items-center justify-center mb-8">
    //     <h2 className="text-2xl font-semibold mb-4">Appliances for your home | Up to 55% off</h2>
    //     <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
    //       <div className="md:w-1/4 grid grid-cols-2 gap-4">
    //         <img src={CCR35} alt="Air conditioners" className="mb-2"/>
    //         <p>Air conditioners</p>
    //       </div>
    //       <div className="md:w-1/4 grid grid-cols-2 gap-4">
    //         <img src={CCR35} alt="Refrigerators" className="mb-2"/>
    //         <p>Refrigerators</p>
    //       </div>
    //       <div className="md:w-1/4 grid grid-cols-2 gap-4">
    //         <img src={CCR35} alt="Microwaves" className="mb-2"/>
    //         <p>Microwaves</p>
    //       </div>
    //       <div className="md:w-1/4 grid grid-cols-2 gap-4">
    //         <img src={CCR35} alt="Washing machines" className="mb-2"/>
    //         <p>Washing machines</p>
    //       </div>
    //     </div>
    //     <a href="#" className="text-blue-600 mt-4 inline-block">See more</a>
    //   </section>

    //   {/* Revamp your home in style Section */}
    //   <section className="mb-8">
    //     <h2 className="text-2xl font-semibold mb-4">Revamp your home in style</h2>
    //     <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
    //       <div className="bg-gray-100 p-4 rounded">
    //         <img src="path/to/cushion-covers.jpg" alt="Cushion covers, bedsheets" className="mb-2"/>
    //         <p>Cushion covers, bedsheets</p>
    //       </div>
    //       <div className="bg-gray-100 p-4 rounded">
    //         <img src="path/to/figurines.jpg" alt="Figurines, vases and more" className="mb-2"/>
    //         <p>Figurines, vases and more</p>
    //       </div>
    //       <div className="bg-gray-100 p-4 rounded">
    //         <img src="path/to/home-storage.jpg" alt="Home storage" className="mb-2"/>
    //         <p>Home storage</p>
    //       </div>
    //       <div className="bg-gray-100 p-4 rounded">
    //         <img src="path/to/lighting-solutions.jpg" alt="Lighting solutions" className="mb-2"/>
    //         <p>Lighting solutions</p>
    //       </div>
    //     </div>
    //     <a href="#" className="text-blue-600 mt-4 inline-block">Explore all</a>
    //   </section>

    //   {/* Automotive essentials Section */}
    //   <section className="mb-8">
    //     <h2 className="text-2xl font-semibold mb-4">Automotive essentials | Up to 60% off</h2>
    //     <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
    //       <div className="bg-gray-100 p-4 rounded">
    //         <img src="path/to/cleaning-accessories.jpg" alt="Cleaning accessories" className="mb-2"/>
    //         <p>Cleaning accessories</p>
    //       </div>
    //       <div className="bg-gray-100 p-4 rounded">
    //         <img src="path/to/tyre-rim-care.jpg" alt="Tyre & rim care" className="mb-2"/>
    //         <p>Tyre & rim care</p>
    //       </div>
    //       <div className="bg-gray-100 p-4 rounded">
    //         <img src="path/to/helmets.jpg" alt="Helmets" className="mb-2"/>
    //         <p>Helmets</p>
    //       </div>
    //       <div className="bg-gray-100 p-4 rounded">
    //         <img src="path/to/vacuum-cleaner.jpg" alt="Vacuum cleaner" className="mb-2"/>
    //         <p>Vacuum cleaner</p>
    //       </div>
    //     </div>
    //     <a href="#" className="text-blue-600 mt-4 inline-block">See more</a>
    //   </section>

    //   {/* Starting ₹99 Section */}
    //   <section className="mb-8">
    //     <h2 className="text-2xl font-semibold mb-4">Starting ₹99 | Amazon Brands & more</h2>
    //     <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
    //       <div className="bg-gray-100 p-4 rounded">
    //         <img src="path/to/home-decor.jpg" alt="Home decor" className="mb-2"/>
    //         <p>Starting ₹179 | Home decor</p>
    //       </div>
    //       <div className="bg-gray-100 p-4 rounded">
    //         <img src="path/to/storage-racks.jpg" alt="Storage & racks" className="mb-2"/>
    //         <p>Up to 60% off | Storage & racks</p>
    //       </div>
    //       <div className="bg-gray-100 p-4 rounded">
    //         <img src="path/to/toys-games.jpg" alt="Toys & games" className="mb-2"/>
    //         <p>Starting ₹99 | Toys & games</p>
    //       </div>
    //       <div className="bg-gray-100 p-4 rounded">
    //         <img src="path/to/jackets-dresses.jpg" alt="Jackets, dresses & more" className="mb-2"/>
    //         <p>Up to 60% off | Jackets, dresses & more</p>
    //       </div>
    //     </div>
    //     <a href="#" className="text-blue-600 mt-4 inline-block">Shop now</a>
    //   </section>

    //   {/* Unique products Section */}
    //   <section className="mb-8">
    //     <h2 className="text-2xl font-semibold mb-4">Up to 75% off | Unique products from new businesses</h2>
    //     <div className="flex overflow-x-scroll space-x-4">
    //       <div className="flex-shrink-0 bg-gray-100 p-4 rounded w-56">
    //         <img src="path/to/product1.jpg" alt="Product 1" className="mb-2"/>
    //         <p>Product 1 description</p>
    //       </div>
    //       <div className="flex-shrink-0 bg-gray-100 p-4 rounded w-56">
    //         <img src="path/to/product2.jpg" alt="Product 2" className="mb-2"/>
    //         <p>Product 2 description</p>
    //       </div>
    //       <div className="flex-shrink-0 bg-gray-100 p-4 rounded w-56">
    //         <img src="path/to/product3.jpg" alt="Product 3" className="mb-2"/>
    //         <p>Product 3 description</p>
    //       </div>
    //       <div className="flex-shrink-0 bg-gray-100 p-4 rounded w-56">
    //         <img src="path/to/product4.jpg" alt="Product 4" className="mb-2"/>
    //         <p>Product 4 description</p>
    //       </div>
    //     </div>
    //     <a href="#" className="text-blue-600 mt-4 inline-block">See all offers</a>
    //   </section>
    // </div>
  )
}

export default ProductCategoryCard 