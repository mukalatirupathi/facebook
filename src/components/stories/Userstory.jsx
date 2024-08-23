import React from 'react'
import CurrentUser from '../../FackApis/CurrentUserData'
import './userstory.css'

const Userstory = () => {
  return (
    <div>
      {
        CurrentUser.map((user)=>(
         <div>
            <div>
            <img className='userprofile' src={user.ProfieImage}/>
            </div>
            <div>
            <img className='usercoverphoto' src={user.CoverPhoto}/>
            </div>
            <h6 className='mb-4'>{user.name}</h6>
         </div>
        ))
      }
    </div>
  )
}

export default Userstory
