import React, {useState } from 'react';
import loginIcons from '../assest/signin.gif';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Login = () => {
  const [showPassword,setShowPassword] = useState(false)
  const [data,setData] = useState({
    email : "",
    password : ""
      })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Submit Button Clicked");
  }

  console.log("data login",data)

  return (
    <section id='login'>
      <div className='mx-auto container p-4'>        
          <div className='bg-black text-white rounded-lg bg-opacity-80 w-full md:w-3/12 p-12 my-36 mx-auto right-0 left-0'>
          <div className='w-20 h-20 mx-auto relative overflow-hidden rounded-full'>
            <div>
                <img src={loginIcons} alt='login icons'/>
            </div>
          </div>
              <form className='pt-6 flex flex-col gap-2' onClick={handleSubmit}>
                  <div>
                      <input type='email' placeholder='Email' className='p-4 my-4 w-full bg-slate-800' />
                  </div>
                      
                  <div>
                      <input type={showPassword ? "text" : "password"} placeholder='Password' name='password' className="p-4 my-4 w-full bg-slate-800 " />
                      <div onClick={() => setShowPassword((preve) => !preve)}>
                          <span>
                            {showPassword ? <FaEye/>:<FaEyeSlash/>}
                          </span>
                      </div>
                  </div>  
            
                  <button className="p-4 my-4 bg-red-600 hover:bg-red-700 text-white w-full" onClick={handleSubmit}>Sign In</button>
                  <div className="flex">
                      <p> Don't have Account: ? <Link to={"/sign-up"} className=" px-2 font-bold cursor-pointer" >Sing up now</Link></p>
                  </div>
              </form>              
          </div>
      </div>
    </section>
  )
}

export default Login