import React from 'react'
import logo from '../assets/logo.png'
import { ShoppingCart } from 'lucide-react'
import { Search } from 'lucide-react'

export default function NavBar() {
  return (
    <div className="absolute top-0 left-0 right-0 z-10 bg-transparent">
      <div className="max-w-full mx-auto flex justify-between items-center px-4 md:px-10">
        <img src={logo} alt="logo" className="w-20" />
        <ul className="flex flex-col md:flex-row items-center text-lg font-semibold">
          <li className="inline-block mx-4 text-white hover:text-gray-300 cursor-pointer">Home</li>
          <li className="inline-block mx-4 text-white hover:text-gray-300 cursor-pointer">Category</li>
          <li className="inline-block mx-4 text-white hover:text-gray-300 cursor-pointer">Contact</li>
        </ul>
        <div className="flex justify-around gap-10">
          <Search className="text-white hover:text-gray-300 cursor-pointer" />
          <ShoppingCart className="text-white hover:text-gray-300 cursor-pointer" />
        </div>
      </div>
    </div>
  )
}
