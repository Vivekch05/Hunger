import React, { useState } from 'react'
const Search = ({ handleSearch, setSearchText, searchText }) => {

    return (
        <div className="w-full max-w-4xl mx-auto my-8 px-4">
            <div className="relative flex items-center shadow-lg">
                <input
                    type="text"
                    placeholder="Search for dishes..."
                    className="w-full px-6 py-4 text-gray-700 bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:border-amber-400 focus:ring-4 focus:ring-amber-100 transition-all duration-300 text-lg"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                />
                <button
                    onClick={handleSearch}
                    className="absolute right-3 px-8 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-lg hover:from-amber-600 hover:to-amber-700 transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-amber-200 font-semibold shadow-md"
                >
                    Search
                </button>
            </div>
        </div>
    );
};

export default Search;