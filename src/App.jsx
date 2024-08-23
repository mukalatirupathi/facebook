// import React from 'react'
// import Home from './components/Home/Home'
// import Leftbar from './components/leftbar/Leftbar'
// import Rightbar from './components/rightbar/Rightbar'
// import './App.css'
// import Navbar from './components/navbar/Navbar'
// import { useState } from 'react'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Chatbox from './components/chatbox/Chatbox'
// const App = () => {
//   const[darkmode,setdarkmode]=useState(false);
// const [theme,settheme]=useState('light')
//   const handledarkmode=()=>{
//     setdarkmode(!darkmode);
//     settheme("dark")
//   }
//   return (
//     <BrowserRouter>
//     <div className={`app-container ${darkmode ? theme :''}`}>
//       <div className='nav12'><Navbar handledarkmode={handledarkmode}/></div>
//         <div className='body'>
//         <Leftbar theme={theme} darkmode={darkmode}/>
//         <Home theme={theme} darkmode={darkmode}/>
//         <Rightbar theme={theme} darkmode={darkmode}/>
//       {/* <Routes>
//         <Route path='/chatbox' element={<Chatbox/>}></Route>
//       </Routes> */}
//      </div>
//     </div>
//     </BrowserRouter>
//   )
// }

// export default App
