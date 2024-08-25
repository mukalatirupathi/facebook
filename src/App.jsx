import React from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Chatbox from './components/chatbox/Chatbox'
import Layout from './pages/Layout'
import Signin from './components/authentication/Signin'
import Signup from './components/authentication/Signup'
import Proflie from './components/proflie/Proflie'
const App = () => {
    const[userlogin,setuserlogin]=useState(false);
  const[darkmode,setdarkmode]=useState(false);
const [theme,settheme]=useState('light')
  const handledarkmode=()=>{
    setdarkmode(!darkmode);
    settheme("dark")
  }
  return (
    <BrowserRouter>
    <div className={`app-container ${darkmode ? theme :''}`}>
      {userlogin && (
      <div className='nav12'><Navbar handledarkmode={handledarkmode}/></div>)}
      <Routes>
       <Route path='/' element={<Signin userlogin={userlogin} setuserlogin={setuserlogin}/>}></Route>
       <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/layout' element={<Layout theme={theme} darkmode={darkmode}/>}></Route>
        <Route path='/chatbox' element={<Chatbox/>}></Route>
        <Route path='/profile' element={<Proflie/>}></Route>

      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
