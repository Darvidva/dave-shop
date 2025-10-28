import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { ShoppingCart, Menu, X } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { useCart } from "../components/Hooks/CartContext";
import CartModal from "./CartModal";

export default function NavBar() {
  const { cartCount } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const location = useLocation();

  // Detect current route
  const isContactPage = location.pathname === "/contact";
  const isCollectionPage = location.pathname === "/collection";

  // Scroll detection for other pages
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const handleNavClick = () => setIsMenuOpen(false);

  // Navbar style logic
  const navbarStyle = isContactPage || isCollectionPage
    ? "bg-white text-black" // Contact page: white background, white text
    : isScrolled
    ? "bg-white text-black shadow-md"
    : "bg-transparent text-white";

  return (
    <div className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div
        className={`max-w-full mx-auto flex justify-between items-center px-4 md:px-4 py-1 ${navbarStyle}`}
      >
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Logo */}
        <img src={logo} alt="logo" className="w-20" />

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center text-lg font-semibold">
          <li className="mx-4">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `hover:text-gray-300 ${
                  isActive ? "underline decoration-2 underline-offset-4" : ""
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li className="mx-4">
            <NavLink
              to="/collection"
              className={({ isActive }) =>
                `hover:text-gray-300 ${
                  isActive ? "underline decoration-2 underline-offset-4" : ""
                }`
              }
            >
              Collection
            </NavLink>
          </li>
          <li className="mx-4">
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `hover:text-gray-300 ${
                  isActive ? "underline decoration-2 underline-offset-4" : ""
                }`
              }
              onClick={handleNavClick}
            >
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Cart icon */}
        <div className="relative">
          <ShoppingCart
            className="hover:text-gray-300 cursor-pointer"
            onClick={() => setIsCartOpen(true)}
          />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-xs text-white rounded-full w-5 h-5 flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden absolute w-full transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        } ${navbarStyle}`}
      >
        <ul className="flex flex-col items-center text-lg font-semibold">
          <li className="my-2">
            <NavLink to="/" end onClick={handleNavClick}>
              Home
            </NavLink>
          </li>
          <li className="my-2">
            <NavLink to="/collection" onClick={handleNavClick}>
              Collection
            </NavLink>
          </li>
          <li className="my-2">
            <NavLink to="/contact" onClick={handleNavClick}>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Cart Modal */}
      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
}
