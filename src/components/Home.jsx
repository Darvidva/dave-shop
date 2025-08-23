import React from 'react'
import { ChevronDown } from 'lucide-react';

function Home() {
  return (
    <>
      <section className='hero-section' 
      style={{backgroundImage: "url('/hero.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh', width: '100%'}}>
        <div className='flex flex-col items-center justify-center h-full p-8 text-white'>
          <h2 className='text-5xl font-bold text-white mb-4'> Effortless Style, Delivered to Your Door.</h2>
          <p className='text-lg mb-6'>Our curated collection of modern essentials helps you build a wardrobe that works for you.</p>
          <div className='absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer'>
            <button className='bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-400 transition mb-2'>
              Explore the Collection
            </button>
            <ChevronDown className='text-white animate-bounce' size={32} />
          </div>
        </div>

        
      </section>
      
    </>
  )
}

export default Home