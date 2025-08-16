import React from 'react'
import Navbar from '../components/Navbar'
import Form from '../components/Form'

const Landing_Page = () => {
  return (
    <div className='bg-neutral-950 min-h-screen flex justify-center items-center'>
        <Navbar/>
        <Form/>
    </div>
  )
}

export default Landing_Page