import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (

    <div className="w-full bg-domo-bg select-none">

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between p-4 gap-6 md:gap-4">
        
       
        <div className="w-[100px] h-[100px] flex-shrink-0 transition-transform active:scale-95 duration-200">
          <Link to="/">
            <img 
              src="/assets/domoro.imgs/Dom_final_logo.png" 
              alt="Domoro logo" 
              className="w-full h-full object-contain"
            />
          </Link> 
        </div> 

        
        <div className="max-w-[280px] sm:max-w-[340px] md:max-w-[400px] h-auto flex items-center justify-center">
          <Link to="/" className="w-full h-full block">
            <img 
              src="/assets/domoro.imgs/Domoro2.png" 
              alt="Domoro tagline logo" 
              className="w-full h-auto object-contain mx-auto"
            />
          </Link>
        </div>

       
        <div className="flex items-center gap-6 md:gap-4 flex-shrink-0">
          
          <Link to="/order" className="w-14 h-14 sm:w-16 sm:h-16 block hover:opacity-85 transition active:scale-95 duration-200" title="View Cart">
            <img src="/assets/domoro.imgs/cart.png" alt="Add to cart" className="w-full h-full object-contain" />
          </Link>

          <Link to="/contact" className="w-14 h-14 sm:w-16 sm:h-16 block hover:opacity-85 transition active:scale-95 duration-200" title="Call Us">
            <img src="/assets/domoro.imgs/call.png" alt="Call us" className="w-full h-full object-contain" />
          </Link>

          <Link to="/login" className="w-14 h-14 sm:w-16 sm:h-16 block hover:opacity-85 transition active:scale-95 duration-200" title="Login to account">
            <img src="/assets/domoro.imgs/login.png" alt="Login to account" className="w-full h-full object-contain" />
          </Link>
          
        </div> 

      </div>

      
      <nav className="bg-nav-domo py-4 sm:py-5 px-4 font-domo-head text-center border-t border-b border-white/5 shadow-inner">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-x-2 gap-y-3 sm:gap-x-6 md:gap-x-8 text-sm sm:text-base tracking-wide">
          <Link to="/" className="text-white hover:text-orange-400 px-3 py-1 rounded transition duration-200">Home</Link>
          <Link to="/menu" className="text-white hover:text-orange-400 px-3 py-1 rounded transition duration-200">Menu</Link>
          <Link to="/order" className="text-white hover:text-orange-400 px-3 py-1 rounded transition duration-200">Order Online</Link>
          <Link to="/reserve" className="text-white hover:text-orange-400 px-3 py-1 rounded transition duration-200">Reservation</Link>
          <Link to="/cater" className="text-white hover:text-orange-400 px-3 py-1 rounded transition duration-200">Catering</Link>
          <Link to="/about" className="text-white hover:text-orange-400 px-3 py-1 rounded transition duration-200">About</Link>
          <Link to="/contact" className="text-white hover:text-orange-400 px-3 py-1 rounded transition duration-200">Contact Us</Link>
        </div>
      </nav>

    </div> 
  );
}
