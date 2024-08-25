import React from 'react'
import "./signup.css"
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";


const Signup = () => {
  const[email,setemail]=useState("");
  const[password,setpassword]=useState("");
  const[confrimpassword,setconfrimpassword]=useState("");

  const handlesignup= async (e)=>{
    e.preventDefault()
    if (password === confrimpassword) {
    try{
      await createUserWithEmailAndPassword(auth,email,password,confrimpassword)
      alert("register succesfully")
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
    <div>
      <h2 className='title'>Register</h2>
       <form className='signup'>
        <h6>email :</h6>
        <input type='email' onChange={(e)=>(setemail(e.target.value))} placeholder='your email?'></input>
        <h6>password :</h6>
        <input type='password' onChange={(e)=>(setpassword(e.target.value))} placeholder='yourpassword'></input>
        <h6> confrim password :</h6>
        <input type='password'onChange={(e)=>(setconfrimpassword(e.target.value))} placeholder='confrim password'></input>
        <div>
          <Link to="/"><button className='btn btn-primary mt-2'onClick={handlesignup}>sign up</button></Link>
           
        </div>
        <p>already have an account<Link to="/">signin</Link></p>
      </form>
    </div>
  )
}

export default Signup
