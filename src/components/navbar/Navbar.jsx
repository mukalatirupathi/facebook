import React, { useState } from 'react'
import "./navbar.css"
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CurrentUser from '../../FackApis/CurrentUserData';
import { Link } from 'react-router-dom';

const Navbar = ({handledarkmode}) => {
  return (
    <div className='nav'>
      <div className='navleft'>
        <img src='../src/assets/img/facebooklogo.png' className='logo'></img>
        <input type="text" className='form-control' placeholder='Search'></input>
        <HomeIcon/>
      </div>
      <div className='middle'>
        <Link to="/chatbox"><button><EmailIcon/></button></Link>
        <button><NotificationsActiveIcon/></button>
        <button onClick={handledarkmode} ><DarkModeIcon/></button>
        <button><MoreHorizIcon/></button>
      </div>
      <div className='navright'>
        <img  className='userphoto'src={CurrentUser.map((user)=>(user.ProfieImage))} width={100}/>
        <h4 className='mt-2'>beg joker</h4>
      </div>
    </div>
  )
}

export default Navbar
