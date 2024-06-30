import React, {useState } from 'react';
import loginIcons from '../assest/signin.gif';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import imageTobase64 from "../utils/imageTobase64";
import { Link, useNavigate } from 'react-router-dom';


const SignUp = () => {
  const [showPassword,setShowPassword] = useState(false)
  const [data,setData] = useState({
    email : "",
    password : "",
    name : "",
    mobileNumber : "",
    profilePic : "",
  })
  const navigate = useNavigate()
  
  const handleUploadPic = async (e) => {
    const file = e.target.files[0]
    const imagePic = await imageTobase64(file)
    setData((preve)=>{
      return{
        ...preve,
        profilePic : imagePic
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Signup Button Clicked");
  }

  return (
    <section id='signup'>
      <div className='mx-auto container p-4'>        
          <div className='bg-black text-white rounded-lg bg-opacity-80 w-full md:w-3/12 p-12 my-36 mx-auto right-0 left-0'>
              <div className='w-20 h-20 mx-auto relative overflow-hidden rounded-full'>
                  <div>
                    <img src={data.profilePic || loginIcons} alt='login icons'/>
                  </div>
                  <form>
                      <label>
                          <div className='text-xs bg-opacity-80 bg-slate-200 pb-4 pt-2 cursor-pointer text-center absolute bottom-0 w-full'>
                            Upload  Photo
                          </div>
                            <input type='file' className='hidden' onChange={handleUploadPic}/>
                      </label>
                  </form>
              </div>
              <form className='pt-6 flex flex-col gap-2' onClick={handleSubmit}>

                  <div>
                      <input type='text' placeholder='Name' className="p-4 my-4 w-full bg-slate-800 " />
                  </div>
                  <div>
                      <input type='email' placeholder='Email' className='p-4 my-4 w-full bg-slate-800' />
                  </div>
                     
                  <div>
                      <input type='tel' placeholder='Mobile Number' className="p-4 my-4 w-full bg-slate-800 " />
                  </div>
                      
                  <div>
                      <input type={showPassword ? "text" : "password"} placeholder='Password' name='password' className="p-4 my-4 w-full bg-slate-800 " />
              
                      <div onClick={() => setShowPassword((preve) => !preve)}>
                          <span>
                              {showPassword ? <FaEye/>:<FaEyeSlash/>}
                          </span>
                      </div>
                  </div>   
            
                      <button className="p-4 my-4 bg-red-600 hover:bg-red-700 text-white w-full" onClick={handleSubmit}>Sign up</button>
                  <div className="flex">
                      <p> Already have Account: ? <Link to={"/login"} className=" px-2 font-bold cursor-pointer" >Login now</Link></p>
                  </div>
              </form>              
          </div>
      </div>
    </section>
  )
}

export default SignUp;