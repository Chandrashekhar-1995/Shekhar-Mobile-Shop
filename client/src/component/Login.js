import React, { useRef, useState } from 'react';
// import checkValidData from '../utils/validate';
// import { createUserWithEmailAndPassword } from 'firebase/auth';
// import { auth } from "../utils/firebase";

const Login = () => {
  const [loginForm, setLoginForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const mobileNumber = useRef(null);

  const handleToggleBtn = () => {
    setLoginForm(!loginForm);
  };

  // const handleSubmitButtonClicked = () => {
  //   const message = checkValidData(email.current.value, password.current.value);
  //   setErrorMessage(message);
  //   console.log(errorMessage);
  //   if (message) return;

  //   if (!loginForm) {
  //     //Signup logic
  //     createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  //     .then()
  //   }
  // }



  return (
    <div>
      <form className="w-full md:w-3/12 p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80" onClick={(e) => e.preventDefault()}>
        <h1 className=" text-3xl text-center ">{loginForm ? "Sign In" : "Sign up"}</h1>
        {!loginForm && <input type='text' ref={name} placeholder='Name' className="p-4 my-4 w-full bg-slate-800 "/>}
        <input type='email' ref={email} placeholder='Email' className="p-4 my-4 w-full bg-slate-800 " />
        {!loginForm && <input type='tel' ref={mobileNumber} placeholder='Mobile Number' className="p-4 my-4 w-full bg-slate-800 "/>}
        <input type='password' ref={password} placeholder='Password' className="p-4 my-4 w-full bg-slate-800 " />
        {/* <button className="p-4 my-4 bg-red-700 w-full" onClick={handleSubmitButtonClicked}>{loginForm ? "Sign In" : "Sign up"}</button> */}
        <div className="flex"><p>{loginForm ? "Don't have Account" : "Alredy have an account"} ? </p><p className=" px-2 font-bold cursor-pointer" onClick={handleToggleBtn}>{loginForm ? "Sing up now" : "Login now"}</p></div>
      </form>
    </div>
  )
}

export default Login