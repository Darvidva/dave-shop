import React, { useState, useEffect} from 'react'
import logo from '../assets/logo.png'
import { ShoppingCart, Menu, X } from 'lucide-react'

export default function NavBar() {

  const  [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300
      ${isScrolled ? 'bg-white text-black' : 'bg-transparent text-white'}`}>
      <div className="max-w-full mx-auto flex justify-between items-center px-4 md:px-10">

        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isMenuOpen ? <X className="" size={28} /> : <Menu className="" size={28} />}
          </button>
        </div>

        <img src={logo} alt="logo" className="w-20" />
        <ul className="hidden md:flex flex-col md:flex-row items-center text-lg font-semibold">
          <li className="inline-block mx-4 hover:text-gray-300 cursor-pointer">Home</li>
          <li className="inline-block mx-4 hover:text-gray-300 cursor-pointer">Category</li>
          <li className="inline-block mx-4 hover:text-gray-300 cursor-pointer">Contact</li>
        </ul>
        
          <ShoppingCart className="hover:text-gray-300 cursor-pointer" />
      </div>

      <div
        className={`md:hidden absolute w-full transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'h-40 opacity-100' : 'h-0 opacity-0 overflow-hidden'
        } ${isScrolled ? 'bg-white text-black': 'text-white'}`}
      >
        <ul className={`flex flex-col items-center py-2 text-lg font-semibold`}>
          <li className="my-2 cursor-pointer">Home</li>
          <li className="my-2 cursor-pointer">Category</li>
          <li className="my-2 cursor-pointer">Contact</li>
        </ul>
      </div>
    </div>
  )
}
