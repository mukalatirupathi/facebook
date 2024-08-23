import React from 'react'

import { createUserWithEmailAndPassword } from "firebase/auth";
import { AuthO } from "./firebase"; // Ensure this import is correct
const Signup = () => {

    const [getEmail, setEmail] = useState("");

  const [getPassword, setPassword] = useState("");
  const [getConfirmPassword, setConfirmPassword] = useState("");

  async function handleSignUp(event) {
    event.preventDefault(); // Prevent default form submission behavior

    if (getPassword === getConfirmPassword) {
      const obj = {
       email: getEmail,
        password: getPassword,
      };

      try {
        const user = await createUserWithEmailAndPassword(
          AuthO,
          getEmail,
          getPassword
        );
        console.log(user);
        console.log("success")
      ;
    
      } catch (error) {
        console.error("Error creating user:", error);
    
      }
    } 
  }
  return (
    <div>
    <form>
     <h6>email</h6>
     <input type='email'onChange={(event)=>{setEmail(event.target.value)}}></input>
     <h6>password</h6>
     <input type='password' onChange={(event)=>{setPassword(event.target.value)}}></input>
     <h6> confrim password</h6>
     <input type='password' onChange={(event)=>{setConfirmPassword(event.target.value)}}></input>
     <div>
         <button className='btn btn-primary' onClick={handleSignUp}>sign up</button>
     </div>
   </form>
 </div>
  )
}

export default Signup
