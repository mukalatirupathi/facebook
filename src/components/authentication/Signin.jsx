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
      alert("register succesfully")
    }
    catch(err){
    console.log(err);
    }

    setuserlogin(true)
    navigate('/layout')
  }
  return (
    <div className='sign'>
        <h4  className="logo">facebook</h4>
      <div className='signin'>
        <form>
        <h2>signin</h2>
        <h6>email</h6>
        <input type='email' className='form-control'onChange={(e)=>(setemail(e.target.value))} placeholder='your email .?'></input>
        <h6>password</h6>
        <input type='password' className='form-control' onChange={(e)=>(setemail(e.target.value))} placeholder='password'></input>
        <div>
          <button className='btn btn-primary mt-2' onClick={handlesignin}>sign in</button>
        </div>
         <p className='mt-2'>don't have account?<Link to="/signup">register</Link></p> 
       </form>
     </div>
    </div>
  )
}

export default Signin
