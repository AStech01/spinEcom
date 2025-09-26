import React from 'react';
import { FaShippingFast, FaCcVisa, FaFacebookF } from 'react-icons/fa';
import { IoMdArrowDropdown } from 'react-icons/io';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 text-sm mt-6">
      <div className="mx-auto w-full max-w-5xl px-4 py-6 lg:py-8">

     
        <div className="flex pl-5 items-center gap-8 mb-8 flex-wrap ">
          {Array(4).fill().map((_, i) => (
            <div key={i} className="flex items-center text-gray-900 dark:text-white font-semibold text-xs">
              <FaShippingFast className="text-[#4B3EC4] text-lg mr-2" />
              <span>Free Shipping over $99</span>

        
              {i < 3 && <span className="mx-4 text-gray-400">|</span>}
            </div>
          ))}
        </div>


        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-6">
          
   
          <div>
            <h2 className="mb-4 font-semibold text-black text-xs uppercase">
              Swoo - Online Electronic Market
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="text-[10px] leading-tight">
                <a href="#" className="hover:underline">
                  hotline 24/7<br />
                  <span className="text-[#4B3EC4]">(025) 3686 25 16</span>
                </a>
              </li>
              <li className="text-[10px] mt-1 leading-tight">
                <a href="#" className="hover:underline">
                  257 Thatcher Road St, Brooklyn, Manhattan,<br />
                  NY 10092 <br />
                  contact@swateletro.com
                </a>
              </li>
            </ul>
          </div>

    
          {Array(3).fill().map((_, i) => (
            <div key={i}>
              <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">Top Category</h2>
              <ul className="text-gray-500 dark:text-gray-400 text-[10px] space-y-1">
                {Array(6).fill().map((__, j) => (
                  <li key={j}>
                    <a href="#" className="hover:underline">TV/Televisions</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <hr className="my-6 border-gray-200 dark:border-gray-700" />


        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          

          <span className="text-xs text-gray-500 text-center sm:text-left dark:text-gray-400">
            © 2024 Shawonetc3. All Rights Reserved.
          </span>

 
          <div className="flex items-center space-x-4">
            <a href="#" className="text-gray-500 hover:text-black dark:hover:text-white" aria-label="Facebook">
              <FaFacebookF className="w-4 h-4" />
            </a>
            <FaCcVisa className="text-blue-700 w-6 h-5" title="Visa" />
          </div>

    
          <div className="flex items-center space-x-3">
            
      
            <div className="flex items-center border border-gray-300 dark:border-gray-600 px-2 py-1 rounded text-xs text-gray-700 dark:text-white cursor-pointer select-none">
              <span>USD</span>
              <IoMdArrowDropdown />
            </div>

 
            <div className="flex items-center space-x-2 border border-gray-300 dark:border-gray-600 px-2 py-1 rounded text-xs text-gray-700 dark:text-white cursor-pointer select-none">
              <img
                src="https://flagcdn.com/us.svg"
                alt="US Flag"
                className="w-4 h-4 rounded-full"
              />
              <span>United States</span>
              <IoMdArrowDropdown />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
