import React from 'react'
import CurrentUser from '../../FackApis/CurrentUserData'
import './userstory.css'
import AddIcon from '@mui/icons-material/Add';
import { useRef } from 'react';

const Userstory = () => {
  const fileInputRef = useRef(null);

  const handleFileButtonClick = () => {
    fileInputRef.current.click(); // Simulate a click on the hidden file input
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Handle the selected file
      console.log('Selected file:', file);
    }
  };
  return (
    <div>
      {
        CurrentUser.map((user)=>(
         <div className='myproflie'>
            <div>
            <img className='userprofile' src={user.ProfieImage}/>
            </div>
            <div>
            <img className='usercoverphoto' src={user.CoverPhoto}/>
            {/* <input type='file'/> */}
            <button className='filebutton' onClick={handleFileButtonClick}><AddIcon/></button>
            <input
                type="file"
                ref={fileInputRef}
                style={{ display: 'none' }}
                onChange={handleFileChange}
              />
            </div>
            <h6 className='mb-4'>{user.name}</h6>
         </div>
        ))
      }
    </div>
  )
}

export default Userstory
