import React, { useState } from 'react';
import {
  Search,
  ShoppingCart,
  Heart,
  User,
  Phone,
  ChevronDown,
  Eye,
  Store,
  PackageCheck,
  Menu,
  X,
} from 'lucide-react';
import flagUsa from '../assets/cat1.png.png'; 

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white text-sm text-gray-700 shadow-sm">
      
      <div className="max-w-5xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-6">
     
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
            <span className="text-white font-bold text-lg">S</span>
          </div>
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="text-lg font-semibold text-gray-800">Swoo</span>
            <span className="text-xs text-gray-400">Shop Smart</span>
          </div>
        </div>

        
        <div className="flex items-center flex-1 min-w-0 gap-2">
          
          <div className="flex flex-1 min-w-0 max-w-full">
            <button className="flex items-center px-3 bg-gray-100 text-gray-700 text-sm hover:bg-gray-200 border border-gray-300 h-10 rounded-l-md whitespace-nowrap shrink-0">
              <span>All Categories</span>
              <ChevronDown className="w-4 h-4 ml-1" />
            </button>

            <input
              type="text"
              placeholder="Search here"
              className="flex-1 h-10 px-3 border-t border-b border-gray-300 text-sm placeholder-gray-400 focus:outline-none min-w-0"
            />

            <button className="px-4 h-10 bg-blue-600 hover:bg-blue-700 text-white rounded-r-md flex items-center justify-center shrink-0">
              <Search className="w-4 h-4" />
            </button>
          </div>

    
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

       
        <div className="hidden md:flex items-center gap-3">
        
          <div className="flex flex-row items-center cursor-pointer text-gray-600 hover:text-gray-900">
            <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center">
              <Phone className="w-4 h-4 text-blue-600" />
            </div>
            <div className="text-[11px] leading-tight text-center">
              <div className="font-[10px] -ml-3">Hotline 24/7</div>
              <div className="text-[13px] text-[#4B3EC4]">+1 234 567 890</div>
            </div>
          </div>

      
          <div className="relative text-gray-600 hover:text-gray-900 cursor-pointer">
            <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center">
              <Heart className="h-5 w-5" />
            </div>
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              3
            </span>
          </div>

       
          <div className="relative text-gray-600 hover:text-gray-900 cursor-pointer">
            <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center">
              <ShoppingCart className="h-5 w-5" />
            </div>
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              2
            </span>
          </div>


          <div className="text-gray-600 hover:text-gray-900 cursor-pointer">
            <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center">
              <User className="h-5 w-5" />
            </div>
          </div>
        </div>
      </div>

     
      <nav className="border-t border-gray-200">
     
        <div className="max-w-5xl mx-auto px-4 py-2 hidden md:flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-blue-600 flex items-center space-x-1">
              <span>Demos</span>
              <ChevronDown className="w-4 h-4" />
            </a>
            <a href="#" className="hover:text-blue-600 flex items-center space-x-1">
              <span>Products</span>
              <ChevronDown className="w-4 h-4" />
            </a>
            <a href="#" className="hover:text-blue-600">Pages</a>
            <a href="#" className="hover:text-blue-600">Contact</a>
          </div>

          <div className="flex items-center space-x-6 text-sm">
            <a href="#" className="flex items-center hover:text-blue-600">
              <Store className="w-4 h-4 mr-1" />
              Sell on Swoo
            </a>
            <a href="#" className="flex items-center hover:text-blue-600">
              <PackageCheck className="w-4 h-4 mr-1" />
              Order Tracking
            </a>
            <a href="#" className="flex items-center hover:text-blue-600">
              <Eye className="w-4 h-4 mr-1" />
              Recently Viewed
              <ChevronDown className="w-4 h-4 ml-1" />
            </a>
            <a href="#" className="flex items-center hover:text-blue-600">
              USD
              <ChevronDown className="w-4 h-4 ml-1" />
            </a>
            <a href="#" className="flex items-center hover:text-blue-600">
              <img src={flagUsa} alt="Flag" className="w-5 h-4 rounded-sm mr-1" />
              United States
              <ChevronDown className="w-4 h-4 ml-1" />
            </a>
          </div>
        </div>

     
        {mobileMenuOpen && (
          <div className="md:hidden max-w-5xl mx-auto px-4 py-4 space-y-4 border-t border-gray-200 bg-white">
            <div className="flex flex-col space-y-3">
              <a
                href="#"
                className="hover:text-blue-600 flex items-center space-x-1 text-base font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>Demos</span>
                <ChevronDown className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="hover:text-blue-600 flex items-center space-x-1 text-base font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>Products</span>
                <ChevronDown className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="hover:text-blue-600 text-base font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pages
              </a>
              <a
                href="#"
                className="hover:text-blue-600 text-base font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
            </div>

            <div className="flex flex-col space-y-3 text-sm">
              <a
                href="#"
                className="flex items-center hover:text-blue-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Store className="w-4 h-4 mr-1" />
                Sell on Swoo
              </a>
              <a
                href="#"
                className="flex items-center hover:text-blue-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                <PackageCheck className="w-4 h-4 mr-1" />
                Order Tracking
              </a>
              <a
                href="#"
                className="flex items-center hover:text-blue-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Eye className="w-4 h-4 mr-1" />
                Recently Viewed
                <ChevronDown className="w-4 h-4 ml-1" />
              </a>
              <a
                href="#"
                className="flex items-center hover:text-blue-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                USD
                <ChevronDown className="w-4 h-4 ml-1" />
              </a>
              <a
                href="#"
                className="flex items-center hover:text-blue-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                <img src={flagUsa} alt="Flag" className="w-5 h-4 rounded-sm mr-1" />
                United States
                <ChevronDown className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
