import React from 'react'
import Home from '../components/Home/Home'
import Leftbar from '../components/leftbar/Leftbar'
import Rightbar from '../components/rightbar/Rightbar'

const Layout = ({darkmode,theme}) => {
  return (
    <div>
      <div className='body'>
        <Leftbar theme={theme} darkmode={darkmode}/>
        <Home theme={theme} darkmode={darkmode}/>
        <Rightbar theme={theme} darkmode={darkmode}/>
     </div>
    </div>
  )
}

export default Layout
