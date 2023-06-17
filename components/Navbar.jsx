// import React from 'react'
"use client"
import NavbarItem from './NavbarItem'

import {useSearchParam} from 'next/navigation'

const Navbar = () => {
  return (
    <div className='flex justify-center space-x-5 dark:bg-gray-600 bg-amber-100'>
      <NavbarItem title="Trending" param="fetchTrending" />
      <NavbarItem title="Top Rated" param="fetchTopRated" />
    </div>
  )
}

export default Navbar
