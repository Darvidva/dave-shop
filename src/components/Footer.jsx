import React from 'react'
import logo from '../assets/logo.png'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="w-full text-black mt-2 border-t border-gray-300">
      <div className="max-w-6xl mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-4">

        {/* Logo & Info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left 
                        pb-6 md:pb-0 border-b md:border-b-0 md:border-r border-gray-300 pr-0 md:pr-6">
          <img src={logo} alt="logo" className="w-20 h-20 object-contain mb-2"/>
          <h3 className="text-lg font-bold">Dave Shop</h3>
          <p className="text-sm mt-2">&copy; 2025 Dave Shop. All rights reserved.</p>
        </div>

        {/* Navigation */}
        <div className="flex flex-col items-center md:items-left
                        pb-6 md:pb-0 border-b md:border-b-0 md:border-r border-gray-300 px-0 md:px-6">
          <h2 className="text-lg font-bold mb-2">Navigation</h2>
          <div className="flex flex-col space-y-2 text-left md:text-center">
            <a href="#" className="hover:text-red-500">Home</a>
            <a href="#" className="hover:text-red-500">Collection</a>
            <a href="#" className="hover:text-red-500">About</a>
            <a href="#" className="hover:text-red-500">Contact</a>
            <a href="#" className="hover:text-red-500">FAQ</a>
          </div>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col items-center md:items-start 
                        pb-6 md:pb-0 border-b md:border-b-0 md:border-r border-gray-300 px-0 md:px-6">
          <h2 className="text-lg font-bold mb-2">Newsletter</h2>
          <form className="flex flex-col items-center md:items-start w-full space-y-2">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="p-2 border border-gray-300 rounded-lg focus:outline-none w-4/5 md:w-full"
            />
            <button 
              className="text-black border border-red-600 px-2 py-2 rounded-full 
                        hover:bg-red-600 hover:text-white transition w-3/5 mx-auto">
              Subscribe
            </button>
          </form>
        </div>

        {/* Social Icons */}
        <div className="flex flex-col items-center px-0 md:px-6">
          <h2 className="text-lg font-bold mb-2 text-center">Follow Us</h2>
          <div className="flex space-x-4 text-2xl text-red-600">
            <a href="#" className="hover:text-black"><Facebook /></a>
            <a href="#" className="hover:text-black"><Twitter /></a>
            <a href="#" className="hover:text-black"><Instagram /></a>
            <a href="#" className="hover:text-black"><Linkedin /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}
