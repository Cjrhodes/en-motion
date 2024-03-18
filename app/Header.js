import React from 'react';
import iconPath from './enmotionicon.ico'; // Update this path to your actual icon file
import Image from 'next/image';


function Header() {
  return (
    <header className="bg-slate-900 text-white body-font">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
 
        <Image src={iconPath} alt="en-motion Logo" className="w-20 h-20 text-white p-2 bg-emerald-600 rounded-full" />
        <span className="ml-3 text-xl">En Motion</span>
      </a>
      <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <a href="#" className="mr-5 hover:text-emerald-300">About</a>
        <a href="#" className="mr-5 hover:text-emerald-300">Services</a>
        <a href="#" className="mr-5 hover:text-emerald-300">Pricing</a>
        <a href="#" className="mr-5 hover:text-emerald-300">Contact</a>
      </nav>
      <a href="#" className="inline-flex items-center bg-emerald-600 border-0 py-1 px-3 focus:outline-none hover:bg-emerald-500 rounded text-base mt-4 md:mt-0">
        Get Started
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </a>
    </div>
  </header>
  );
}

export default Header;
