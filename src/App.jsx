import React from 'react'
import Navbar from './components/NavBar'
import Homepage from './components/Pages/Homepage'
import Footer from './components/Footer'
import { CartProvider } from './components/Hooks/CartContext'



function App() {


  return (
    <CartProvider>
      <Navbar />
      <Homepage />
      <Footer />
    </CartProvider>
  )
}

export default App
