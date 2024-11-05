import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./signin.css"
import { auth } from '../../firebase';
import {signInWithEmailAndPassword} from "firebase/auth";

const Signin = ({userlogin,setuserlogin}) => {
  const[email,setemail]=useState("");
  const[password,setpassword]=useState("");


  const navigate=useNavigate()
  const handlesignin= async(e)=>{
    e.preventDefault()
    try{
      await signInWithEmailAndPassword(auth,email,password)
      alert("login sucessfully")
       setuserlogin(true)
       navigate('/layout')
    }
    catch(err){
    console.log(err);
    alert('Failed to login. Please check your email or password.');
    }

  }
  return (
  <div className='usersignin'>
    <div className='sign'>
      <div className='signin'>
        <form>
        <h2 className='signheader'>signin</h2>
        <h6 className='mt-2'>email :</h6>
        <input type='email' className='form-control mt-3'onChange={(e)=>(setemail(e.target.value))} placeholder='your email .?'></input>
        <h6 className='mt-2'>password :</h6>
        <input type='password' className='form-control mt-3' onChange={(e)=>(setpassword(e.target.value))} placeholder='password'></input>
        <div>
          <button className='btn btn-primary mt-3 signinbutt' onClick={handlesignin}>sign in</button>
        </div>
         <p className='mt-2 p-2'>don't have account?<Link to="/signup">register</Link></p> 
       </form>
      </div>
    </div>
  </div>
  )
}

export default Signin
