import React, { useState } from 'react'
import './index.scss';
const Search = ({ handleSearch, setSearchText, searchText }) => {

    return (
        <div className='search'>
            <input type="text" className='search-input' placeholder='Search for food items...' value={searchText}
                onChange={(e) => setSearchText(e?.target?.value)} />
            <button onClick={handleSearch}>Search</button>
        </div>
    )
}

export default Search