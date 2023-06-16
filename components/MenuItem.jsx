// import React from 'react'
import Link from 'next/link'

export default function MenuItem({title, address, Icon}) {
  return (
    <div>
      <Link className="hover:text-amber-600 mx-4 lg:mx-6" href={address}>
        <p className='hidden sm:inline my-2 text-sm'>{title}</p>
        <Icon className="text-2xl sm:hidden mx-4"/>
      </Link>
    </div>
  )
}
