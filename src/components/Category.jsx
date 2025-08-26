import React from 'react'
import MasonryGrid from "./MasonryGrid";

function Category() {
  return (
    <div>
         <h2 className='text-2xl text-center font-bold p-4'>Category</h2>
         <div className="p-3 min-h-screen">
            <MasonryGrid />
        </div>
    </div>
  )
}

export default Category