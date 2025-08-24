import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import {Link} from 'react-router-dom'

const Check_Visits = () => {
  const [views, setviews] = useState();
  const [submitstatus, setsubmitstatus] = useState(false);
  const [buttonColor, setbuttonColor] = useState("bg-white")
  const [buttontext, setbuttontext] = useState("Submit")

    const getURL = async (e)=>{
        e.preventDefault();
        const arr = await  e.target.URL.value.split("/");
        const shortCode = arr[3];

        axios.get(`http://localhost:3000/api/shorty/checkViews/${shortCode}`)
        .then(function(res){
          setviews(res.data);
          setsubmitstatus(true);
          setbuttonColor("bg-green-400");
          setbuttontext("Submitted");
        })
        .catch(function(err){
          console.log(err);
        })
      }

      const pseudoRefresh = (e)=>{
        e.preventDefault();
        setviews(0);
        setsubmitstatus(false);
        setbuttonColor("bg-white");
        setbuttontext("Submit");
      }
  
  return (
    <div className='bg-black flex justify-center items-center h-screen' >

      <form className='flex flex-col justify-center items-center w-[40%] h-40 bg-neutral-800 rounded-2xl' onSubmit={getURL}>

        <input type="url" placeholder='Enter the Short URL' name="URL" className='h-10 text-white text-1xl w-[90%] bg-neutral-700 rounded-2xl p-2 focus:outline-none mb-2' required/>

        <div className='flex justify-around w-full'>
          <button className={`w-[20%] h-8 ${buttonColor} cursor-pointer rounded-2xl`} disabled={submitstatus}>{buttontext}</button>

          <button className={`w-[30%] h-8 bg-blue-400 cursor-pointer rounded-2xl`} hidden={!submitstatus} onClick={pseudoRefresh}>Check for another</button>

          <Link to={"/"} className={`w-[20%] h-8 bg-green-300 cursor-pointer flex justify-center items-center rounded-2xl hover:bg-green-400`}>Go Back</Link>

        </div>
      </form>
      <h1 className='text-white text-3xl' hidden={!submitstatus}>The URL was visited {views} times..</h1>
    </div>
  )
}

export default Check_Visits