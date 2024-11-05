import React from 'react'
import "./signup.css"
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";


const Signup = () => {
  const[email,setemail]=useState("");
  const[password,setpassword]=useState("");
  const[confrimpassword,setconfrimpassword]=useState("");
  const navigate=useNavigate()

  const handlesignup= async (e)=>{
    e.preventDefault()
    if (password === confrimpassword) {
    try{
      await createUserWithEmailAndPassword(auth,email,password,confrimpassword)
      alert("register succesfully") 
      navigate('/')
    }
    catch(err){
    console.log(err);
    }
    }
    else{
      alert("password doesn't match");
    }
  }
  return (
    <div className='usersignup'>
      <div className='signup'>
      <h2 className='title'>Register</h2>
       <form className='signupform'>
        <h6 className='mt-3'>email :</h6>
        <input type='email' className='form-control mt-4' onChange={(e)=>(setemail(e.target.value))} placeholder='your email?'></input>
        <h6 className='mt-3'>password :</h6>
        <input type='password' className='form-control mt-4' onChange={(e)=>(setpassword(e.target.value))} placeholder='yourpassword'></input>
        <h6 className='mt-3'> confrim password :</h6>
        <input type='password' className='form-control mt-4'onChange={(e)=>(setconfrimpassword(e.target.value))} placeholder='confrim password'></input>
        <div>
          <Link to="/"><button className='btn btn-primary signupbutt mt-3'onClick={handlesignup}>sign up</button></Link>  
        </div>
        <p className='mt-3'>already have an account  ?  <Link to="/">signin</Link></p>
      </form>
    </div>
    </div>
  )
}

export default Signup
