import React from 'react'
import "./message.css"
import MessageIcon from '@mui/icons-material/Message';
import Messages from '../../FackApis/MessageData';



const Message = ({theme,darkmode}) => {
  return (
    <div className={`frndmessage ${darkmode ? theme :''}`}>
      <div className='message'>
        <h2>message</h2>
        <MessageIcon/> 
      </div>
      <div className='search'>
        <input type="search" placeholder='fav person'/>
      </div>
      <div className='usermessage'>
        {
          Messages.map(mess=>(
            <div key={mess.id}>
              <img className='messageimg' src={mess.img}/> 
              <h6>{mess.name}</h6>
              <p>{mess.mText}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Message
