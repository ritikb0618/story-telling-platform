import React from "react";
import { Search } from "lucide-react"; // Import search icon

function Navbar() {
  return (
    <nav className="flex items-center justify-between py-4 px-8 bg-gray-800 text-white shadow-lg">
      <div className="text-2xl font-bold">Storyteller</div>

      {/* User avatar and Search bar wrapper */}
      <div className="flex items-center space-x-6 ml-auto">
        {/* Search bar with icon */}
        <div className="relative w-64"> {/* Fixed width to prevent overlap */}
          <input
            type="text"
            placeholder="Search stories..."
            className="w-full pl-10 pr-3 py-2 rounded bg-gray-700 text-white focus:outline-none"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
        </div>

        {/* User avatar */}
        <img
          src="https://via.placeholder.com/40"
          alt="User Avatar"
          className="w-10 h-10 rounded-full border-2 border-gray-600"
        />
      </div>
    </nav>
  );
}

export default Navbar;
