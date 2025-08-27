import React from 'react'
import MasonryGrid from "./MasonryGrid";

function Category() {
  return (
    <div>
      <div className="text-center mb-5">
         <h2 className='text-2xl font-bold py-2'>Category</h2>
         <div className="w-16 h-1.25 bg-red-500 rounded mx-auto"></div>
         <p className="text-gray-500 text-center mt-2">Explore our range of product categories and find what suits your style best.</p>
      </div>
         <div className="p-3 min-h-screen">
            <MasonryGrid />
        </div>
    </div>
  )
}

export default Category