import React from 'react'
import Messageslist from '../../FackApis/ChatboxData';
import './chathistory.css'

const Chathistory = ({userfrnd}) => {
    const frndchat=Messageslist.find(message=>message.name==userfrnd)
    console.log(frndchat);
  return (
    <div>
      <h4 className='frndname'>{userfrnd}</h4>
     {
        frndchat.chatHistory.map((chat)=>(
          <h6>{chat.message}</h6>
        ))
     }
    </div>
  )
}

export default Chathistory
