import React from 'react';
import { Search, ChevronDown, Phone } from 'lucide-react';

const SearchBarWithContact = () => {
  return (
    <div className="w-full max-w-4xl flex items-center gap-4">
      
    
      <div className="flex items-center text-sm text-gray-700 space-x-1 whitespace-nowrap">
        <Phone className="w-4 h-4 text-blue-600" />
        <span>+1 234 567 890</span>
      </div>

     
      <div className="flex flex-1 border border-gray-300 rounded-md overflow-hidden bg-white shadow-sm">

       
        <button className="flex items-center px-3 bg-gray-100 text-gray-700 text-sm hover:bg-gray-200">
          <span>All Categories</span>
          <ChevronDown className="w-4 h-4 ml-1" />
        </button>

  
        <input
          type="text"
          placeholder="Search here"
          className="flex-1 px-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none"
        />

      
        <button className="px-4 bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center">
          <Search className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default SearchBarWithContact;
