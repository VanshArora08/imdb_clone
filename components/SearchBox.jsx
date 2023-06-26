// import React from 'react'
"use client"
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const SearchBox = () => {
    const router = useRouter();
    const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(searchTerm);
    if(!searchTerm) return;
    router.push(`/search/${searchTerm}`);

  }
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <form className='flex max-w-6xl mx-auto justify-between items-center px-5' onSubmit={handleSearchSubmit}>
        <input type="text" placeholder='search keywords...'
         className='w-full h-14 rounded-sm placeholder-gray-500 outline-none bg-transparent'
         onChange={(e)=>setSearchTerm(e.target.value)}
         value={searchTerm}
        />
        <button type='submit' className='text-amber-600 disabled:text-gray-400 '
        disabled={!searchTerm}
        >Search</button>
    </form>
  )
}

export default SearchBox
