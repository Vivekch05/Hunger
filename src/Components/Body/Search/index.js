import React, { useState } from 'react'
const Search = ({ handleSearch, setSearchText, searchText }) => {

    return (
        <div className='flex justify-between align-center m-3'>
            <input type="text" className='mx-2 my-0 p-2 w-2xl h-10 rounded-2xl border-b-gray-600 bg-blue-100' placeholder='Search for food items...' value={searchText}
                onChange={(e) => setSearchText(e?.target?.value)} />
            <button className='w-25 h-10 bg-blue-600 text-white rounded-2xl' onClick={handleSearch}>Search</button>
        </div>
    )
}
export default Search