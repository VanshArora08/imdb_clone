import React from 'react'

const about = () => {
  return (
    <div className='max-w-6xl mx-auto space-x-4'>
        <h1 className='text-2xl font-medium text-amber-600'>About</h1>
        <p>
            This is a clone of IMDb website. It is built using Next.js and Tailwind CSS. It uses the IMDb API to fetch the data. It is a part of my learning process of Next.js and Tailwind CSS.
        </p>
        <p>
            The source code of this project is available on <a className='text-amber-600 hover:text-amber-500' href="https://github.com/vanshArora08">GitHub</a>.
        </p>
    </div>
  )
}

export default about
