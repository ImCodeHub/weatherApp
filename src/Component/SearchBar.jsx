import React from 'react'
import { useState } from 'react'


function SearchBar({onSearch}) {
    const [location, setLocation] = useState('');

    const handleInputChange = (e)=>{
        setLocation(e.target.value);
    }

    const handleSearch = () =>{
        onSearch(location);
        setLocation('');  //clear the input field after search.
    };

  return (
    <div className='search-bar flex w-[35rem]'>
        <input type="text" value={location} onChange={handleInputChange} placeholder='Enter location' className='search-input flex-grow w-full border border-gray-300 rounded-md px-2 py-1'/>
        <button onClick={handleSearch} className='ml-2 bg-red-700 hover:bg-red-600 shadow-2xl hover:shadow-indigo-500 transition-shadow duration-300 text-white rounded-md px-3 py-1'>Search</button>
    </div>
  )
}

export default SearchBar