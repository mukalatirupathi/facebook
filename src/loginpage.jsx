import React from 'react'
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
  } from "firebase/auth";
  import { AuthO } from "./firebase";

const Loginpage = () => {

    async function handleLogin(event) {
        event.preventDefault(); // Prevent default form submission behavior
    
        try {
          const user = await signInWithEmailAndPassword(
            AuthO,
            getEmail,
            getPassword
          );
          console.log(user);
          toast.success("User LOGIN successfully");
          setTimeout(() => {
            navigate("/");
          }, 2000);
        } catch (error) {
          console.error("Error creating user:", error);
          toast.error(`Error: ${error.message}`);
        }
      }
    


  return (
    <div>
      <form>
        <h6>email</h6>
        <input type='email'></input>
        <h6>password</h6>
        <input type='password'></input>
        <div>
            <button className='btn btn-primary'>sign in</button>
            <button className='btn btn-primary'>sign up</button>
        </div>
      </form>
    </div>
  )
}

export default Loginpage
