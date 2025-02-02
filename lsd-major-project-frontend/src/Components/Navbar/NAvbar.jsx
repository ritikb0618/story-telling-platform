import React from 'react';
import { Search, User } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 border-b border-gray-800">
      <div className="max-w-4xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start space-x-4">
            <h1 className="text-white text-xl font-bold">◾ Storyteller</h1>
          </div>
          
          <div className="flex items-center space-x-6">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search"
                className="block w-64 bg-gray-800 border border-gray-700 rounded-md py-2 pl-10 pr-3 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <button className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors">
              <User className="h-5 w-5 text-gray-400" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;