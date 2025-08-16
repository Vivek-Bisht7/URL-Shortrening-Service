import React, { useState } from 'react'

const Form = () => {

  const [submitStatus, setsubmitStatus] = useState(false);

  const submitHandler = (e)=>{
    console.log("Submitted successfully");
    setsubmitStatus(true);
    e.preventDefault();
    
  }

  return (
    <div className='bg-neutral-900 w-[50%] h-[50vh] rounded-2xl'>
        <form 
          className='flex justify-center items-center flex-col h-full' 
          method='post' 
          onSubmit={submitHandler}
          >
            <input 
              type="url" 
              className='bg-neutral-400 m-6 w-[90%] h-9 text-black' 
              placeholder='Enter the long URL'
              />

            <button type='submit' 
                    className='bg-neutral-300 h-9 w-20 text-1xl cursor-pointer ' 
                    disabled={submitStatus}
            >
              Submit</button>
        </form>
    </div>
  )
}

export default Form