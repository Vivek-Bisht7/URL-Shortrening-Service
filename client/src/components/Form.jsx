import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Form =() => {

  const [submitStatus, setsubmitStatus] = useState(false);
  const [buttoncolor, setbuttoncolor] = useState('bg-neutral-300');
  const [buttonText, setbuttonText] = useState('Submit');
  const [data, setdata] = useState('');
  const [hiddenStatus, sethiddenStatus] = useState(true);
  const [shortCode, setshortCode] = useState('');
  const [copyStatus, setcopyStatus] = useState("Copy")
  const [views, setviews] = useState("hello");

  
  const submitHandler = async (e)=>{
    
    e.preventDefault();
    setsubmitStatus(true);
    setbuttoncolor('bg-amber-200');
    setbuttonText('Submitting..');
    const res = await axios.post('http://localhost:3000/api/shorty',{longURL:data});
    setshortCode(res.data);
    sethiddenStatus(false);
    setbuttoncolor('bg-green-200');
    setbuttonText('Submitted');
  }

  const inputHandler = (e)=>{
    setdata(e.target.value);
  }

  const copyHandler = ()=>{
     navigator.clipboard.writeText(`http://localhost:5173/${shortCode}`)
      setcopyStatus("Copied!");
  }

  const pseudoRefresh = ()=>{
    setsubmitStatus(false);
    setbuttoncolor('bg-neutral-300');
    setbuttonText('Submit');
    setdata('');
    sethiddenStatus(true);
    setshortCode('');
    setcopyStatus('Copy');
  }

  return (
    <div className='bg-neutral-900 w-[50%] h-[45vh] rounded-2xl'>
        <form 
          className='flex justify-center items-center flex-col h-full' 
          onSubmit={submitHandler}
          >

            <label 
              htmlFor='longURL' 
              className='text-white text-sm self-start  ml-9'>
                Enter Long URL
            </label>

            <input 
              type="url" 
          className='bg-neutral-400 m-6 w-[90%] h-9 text-black rounded-2xl p-1' 
              placeholder='Enter the long URL'
              required
              value={data}
              onChange={inputHandler}
              id='longURL'
              />

              <label 
                htmlFor='shortURL' 
                className='text-white self-start  ml-9 text-sm' 
                hidden={hiddenStatus}>
                  Your Shortened URL
              </label>

              <input 
              className='bg-neutral-400 m-6 w-[90%] h-9 text-black rounded-2xl p-1'
              hidden={hiddenStatus}
              value={`http://localhost:5173/${shortCode}`}
              onChange={()=>{}}
              id='shortURL'
              />

            <div className="flex justify-around w-[60%]">
                <button type='submit' 
                    className={`${buttoncolor} h-9 w-20 text-1xl cursor-pointer `}
                    disabled={submitStatus}
              >
                {buttonText}</button>

              <button type='button' 
                    className='bg-white h-9 w-20 text-1xl cursor-pointer '
                    hidden={hiddenStatus}
                    onClick={copyHandler}
            >
              {copyStatus}</button>

              <button onClick={pseudoRefresh} type='button' hidden={hiddenStatus} className='bg-white h-9 w-30 text-1xl'>Genreate More</button>
            </div>

        </form>
    </div>
  )
}

export default Form

// try{
//    useEffect(() => {
//     axios.get(`http://localhost:3000/api/shorty/${shortCode}`)
//     .then(function(res){
//       setviews(res.data.visits);
//     })
//     .catch(function(err){
//       console.log(err);
      
//     })
//   }, [])
//  }
//  catch(err){
//   console.log(err.message);
  
//  }
  

//   const countViews = ()=>{
//     console.log(views);
    
//   }