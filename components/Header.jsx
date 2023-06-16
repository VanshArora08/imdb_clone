// import React from 'react'
import {AiFillHome} from 'react-icons/ai'
import {BsFillInfoCircleFill} from 'react-icons/bs'
import Link from 'next/link';

import MenuItem from "./MenuItem";

export default function Header() {
  return (
    <div className='flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-4'>
      <div className="flex">
        <MenuItem title="HOME" address="/" Icon={AiFillHome}/>
        <MenuItem title="ABOUT" address="/about" Icon={BsFillInfoCircleFill}/>
      </div>
      <div className="">
        <Link href="/">
          <h2 className='text-2xl'>
            <span className='font-bold bg-amber-500 py-1 px-2 rounded-lg'>IMDb</span> 
            <span className='text-xl hidden sm:inline'>Clone</span>
          </h2>
        </Link>
      </div>

    </div>
  )
}
