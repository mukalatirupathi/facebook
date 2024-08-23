
import React from 'react'
import Message from '../message/Message'
import FriendRequest from '../friendrequest/FriendRequest'

const Rightbar = ({darkmode,theme}) => {
 
  return (
    <div className={`rightBar `}>
      <Message theme={theme} darkmode={darkmode}/>
      <FriendRequest theme={theme} darkmode={darkmode}/>
    </div>
  )
}

export default Rightbar
