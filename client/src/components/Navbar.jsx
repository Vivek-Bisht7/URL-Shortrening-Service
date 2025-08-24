import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
     <div className='bg-neutral-900 w-full p-2 flex justify-between fixed top-0'>
      <h1 className='text-neutral-200 text-3xl '>Shorty</h1>
      <Link  to={"/checkViews"}
                    className='bg-white h-9 w-30 text-1xl cursor-pointer p-2 flex justify-center'
            >
              Count Views</Link>

    </div>
  )
}

export default Navbar