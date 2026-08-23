import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-nav-domo w-full py-10 select-none">
      
  
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-start justify-between gap-12 mb-10">
        
       
        <div className="max-w-md flex-shrink-0">
       
          <Link to="/" className="inline-block mb-4 transition-transform active:scale-95 duration-200">
            <img 
              className="w-[100px] h-[100px] object-contain" 
              src="/assets/domoro.imgs/Dom_final_logo.png" 
              alt="domoro logo" 
            />
          </Link> 

       
          <p className="text-white font-domo-head text-base leading-relaxed"> 
            Get a taste of The Gambia right here in NYC.<br /> 
            We keep the culture alive.<br /> 
            Order some tasty foods today!
          </p>
        </div>

       
        <div className="w-full flex-1 flex flex-col sm:flex-row sm:justify-around gap-8 font-domo-head pt-4">
        
          <div className="flex flex-col space-y-3">
            <h3 className="text-orange-400 font-bold tracking-wider text-sm uppercase">Explore</h3>
            <Link to="/" className="text-white/80 hover:text-orange-400 transition duration-150 text-sm">Home</Link>
            <Link to="/menu" className="text-white/80 hover:text-orange-400 transition duration-150 text-sm">Our Menu</Link>
            <Link to="/about" className="text-white/80 hover:text-orange-400 transition duration-150 text-sm">About Us</Link>
          </div>

      
          <div className="flex flex-col space-y-3">
            <h3 className="text-orange-400 font-bold tracking-wider text-sm uppercase">Services</h3>
            <Link to="/order" className="text-white/80 hover:text-orange-400 transition duration-150 text-sm">Order Online</Link>
            <Link to="/reserve" className="text-white/80 hover:text-orange-400 transition duration-150 text-sm">Reservations</Link>
            <Link to="/cater" className="text-white/80 hover:text-orange-400 transition duration-150 text-sm">Catering</Link>
          </div>

        
          <div className="flex flex-col space-y-3">
            <h3 className="text-orange-400 font-bold tracking-wider text-sm uppercase">Help</h3>
            <Link to="/contact" className="text-white/80 hover:text-orange-400 transition duration-150 text-sm">Contact Us</Link>
            <Link to="/privacy" className="text-white/80 hover:text-orange-400 transition duration-150 text-sm">Privacy Policy</Link>
            <Link to="/terms" className="text-white/80 hover:text-orange-400 transition duration-150 text-sm">Terms of Service</Link>
          </div>

        </div>

      </div>

      <div className="mb-8 px-6 md:px-12 ">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-white font-domo-head bg-domo-bg rounded-xl p-2 px-5 cursor-pointer font-semibold shadow-md transition hover:opacity-90 active:scale-85"
        > 
          BACK TO TOP 
        </button>
      </div>
      
   
      <div className="text-center text-white/60 font-domo-head text-sm pt-6 border-t border-white/5">      
        <p>Copyright © 2024 Domoro™</p> 
      </div>

    </footer>
  );
}
