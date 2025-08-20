import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

const URL_Changer = () => {
    const {shortCode} = useParams();

    const [status, setstatus] = useState('Loading..');

    useEffect(() => {
      axios.get(`http://localhost:3000/api/shorty/${shortCode}`)
      .then(function(res){
        window.location.href = res.data;
      })
      .catch(function(err){
        console.log(err);
        setstatus('Invalid URL');
      })
      
    }, [])
    

  return (
    <div className='flex justify-center items-center text-4xl min-h-screen text-white bg-black'>{status}</div>
  )
}

export default URL_Changer