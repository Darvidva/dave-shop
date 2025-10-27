import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import Homepage from './components/Pages/Homepage';
import Collection from './components/Pages/Collection';
import Contact from './components/Pages/Contact';
import Footer from './components/Footer';
import { CartProvider } from './components/Hooks/CartContext';

function App() {
  return (
    <CartProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </CartProvider>
  );
}

export default App;
