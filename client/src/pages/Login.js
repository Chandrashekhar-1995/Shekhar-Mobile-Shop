import React, { useRef, useState } from 'react';
import loginIcons from '../assest/signin.gif';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from 'react-router-dom';
// import checkValidData from '../utils/validate';
// import { createUserWithEmailAndPassword } from 'firebase/auth';
// import { auth } from "../utils/firebase";

const Login = () => {
  const [showPassword,setShowPassword] = useState(false)
  const [loginForm, setLoginForm] = useState(true);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const mobileNumber = useRef(null);

  const handleToggleBtn = () => {
    setLoginForm(!loginForm);
  };

  const handleSubmitButtonClicked = () => {
    console.log("Submit Button Clicked");
  }



  return (
    <section id='login'>
      <div>
        <form className="w-full md:w-3/12 p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80" onClick={(e) => e.preventDefault()}>
        <div className='w-20 h-20 mx-auto'>
          <img src={loginIcons} alt='login icons'/>
      </div>
        <h1 className=" text-3xl text-center ">{loginForm ? "Sign In" : "Sign up"}</h1>
          {!loginForm &&
            <div>
              <input type='text' ref={name} placeholder='Name' className="p-4 my-4 w-full bg-slate-800 " />
            </div>}
            <div>
            <input type='email' ref={email} placeholder='Email' className="p-4 my-4 w-full bg-slate-800 " />
            </div>
            {!loginForm &&
              <div>
                <input type='tel' ref={mobileNumber} placeholder='Mobile Number' className="p-4 my-4 w-full bg-slate-800 " />
              </div>
            }
          <div>
            <input type={showPassword ? "text" : "password"} ref={password} placeholder='Password' name='password' className="p-4 my-4 w-full bg-slate-800 " />
            <div onClick={() => setShowPassword((preve) => !preve)}>
              <span>
                {showPassword ? <FaEye/>:<FaEyeSlash/>}
              </span>
            </div>
          </div>        
        <button className="p-4 my-4 bg-red-600 hover:bg-red-700 text-white w-full" onClick={handleSubmitButtonClicked}>{loginForm ? "Sign In" : "Sign up"}</button>
        <div className="flex"><p>{loginForm ? "Don't have Account" : "Alredy have an account"} ? </p><p className=" px-2 font-bold cursor-pointer" onClick={handleToggleBtn}>{loginForm ? "Sing up now" : "Login now"}</p></div>
      </form>
      </div>
      </section>
  )
}

export default Login