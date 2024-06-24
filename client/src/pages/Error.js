import React from 'react'
import { useNavigate } from 'react-router-dom';
import Not from "../static/Not.svg";

const Error = () => {
  const navigate = useNavigate()

  const goBack = () => {
    navigate(-1)
  }
  return (
    <div className='h-screen w-screen items-center text-center justify-center flex'>
      <div>
        <h1 className='text-5xl font-bold'>Not Found!</h1>
        <img src={Not} alt='not found' />
        <p className='font-bold'>Hmm.. The page you are looking for does not exist</p>
      <button className='bg-blue-700 text-white rounded-lg m-4 p-2 hover:bg-blue-900' onClick={goBack}> Go Back</button>
      </div>
    </div>
  )
}

export default Error;