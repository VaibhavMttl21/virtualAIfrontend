import { useState, useEffect } from 'react';
import { Search, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ',
        isScrolled
          ? 'bg-black/80 backdrop-blur-md shadow-lg py-4'
          : 'bg-transparent py-6'
      )}
    >
      <div className="max-w-10xl ml-10">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl font-bold text-fuchsia-500 ml-32"
            >
              Aetheria
              </motion.h1>
          </div>

          {/* Desktop Navigation */}
            <div className='flex justify-center space-x-10 hidden md:flex ml-32 '>
            <div className='h-4 pb-5'>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              Shop
            </a>
            </div>
            <div className='border-x-2 h-4 pb-5 px-16'>
            <a href="#" className="text-gray-300 hover:text-white transition-colors ">
              About Us
            </a>
            </div>
            <div  className='h-4 pb-5'>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              Product
            </a>
            </div>
            <div  className=' border-x-2 h-4 pb-5  px-16 '>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              Services
            </a>
            </div>
            <div className=' h-4 pb-5 '>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              Contact
            </a>
            </div>
            </div>
          {/* Search Bar */}
          
          <div className="hidden md:flex items-center">
            <div className="relative ml-24">
              <input
                type="text"
                placeholder="Search..."
                className="bg-gray-900/50 text-white rounded-full pl-10  py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 w-[200px] transition-all duration-300 focus:w-[300px]"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            </div>
          </div>
          

                    {/* {icon} */}
                    <div >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 mr-52">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.7-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
          </svg>

          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-gray-900/95 rounded-lg p-4 animate-in slide-in-from-top">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Home
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Products
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                About
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Contact
              </a>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full bg-gray-800 text-white rounded-full pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}