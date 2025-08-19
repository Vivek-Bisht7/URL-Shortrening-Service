import React, { useState } from 'react'
import axios from 'axios'

const Form =() => {

  const [submitStatus, setsubmitStatus] = useState(false);
  const [buttoncolor, setbuttoncolor] = useState('bg-neutral-300');
  const [buttonText, setbuttonText] = useState('Submit');
  const [data, setdata] = useState('');
  const [hiddenStatus, sethiddenStatus] = useState(true);
  const [shortCode, setshortCode] = useState('');

  const getShortCode = () => {
    axios.get('http://localhost:3000/api',{params:{data}})
    .then(function(res){
      setshortCode(res.data);
    })
    .catch(function(err){
      console.log(err);  
    })
  }

  const submitHandler = async (e)=>{
    
    e.preventDefault();
    setsubmitStatus(true);
    setbuttoncolor('bg-amber-200');
    setbuttonText('Submitting..');
    axios.post('http://localhost:3000/api',{longURL:data});
    getShortCode();
    sethiddenStatus(false);
    setbuttoncolor('bg-green-200');
    setbuttonText('Submitted');
  }

  const inputHandler = (e)=>{
    setdata(e.target.value);
  }

  return (
    <div className='bg-neutral-900 w-[50%] h-[40vh] rounded-2xl'>
        <form 
          className='flex justify-center items-center flex-col h-full' 
          onSubmit={submitHandler}
          >
            <input 
              type="url" 
              className='bg-neutral-400 m-6 w-[90%] h-9 text-black rounded-2xl p-1' 
              placeholder='Enter the long URL'
              required
              value={data}
              onChange={inputHandler}
              />

              <input 
              className='bg-neutral-400 m-6 w-[90%] h-9 text-black rounded-2xl p-1'
              hidden={hiddenStatus}
              value={`http://localhost:5173/${shortCode}`}
              onChange={()=>{}}
              />

            <button type='submit' 
                    className={`${buttoncolor} h-9 w-20 text-1xl cursor-pointer `}
                    disabled={submitStatus}
            >
              {buttonText}</button>
        </form>
    </div>
  )
}

export default Form