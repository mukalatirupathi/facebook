import React, { useState } from 'react'
import MessageIcon from '@mui/icons-material/Message';
import "./chatbox.css";
import Messagelist from "../../FackApis/ChatboxData";
import Chathistory from '../chathistory/Chathistory';


const Chatbox = () => {
  const[userfrnd,setuserfrnd]=useState("Ahammed Alli");
  return (
<div>
  <div className='frnds'>
    <div className='chatcontacts'>
      <div className='chatbox mt-3'>
        <h4>messages</h4>
        <button className='messbutton'><MessageIcon/></button>
      </div>
      <div>
        <input type="text" className='form-control' placeholder='search your fav person'/>
      </div>
      <div>
        {
          Messagelist.map((message)=>(
            <div  className="chat" key={message.id} onClick={()=>setuserfrnd(message.name)}>
                <img  className="chatimg" src={message.img}></img>
                <h6 className='mt-3'>{message.name}</h6>
            </div>
          ))
        }
      </div>
      </div> 
        <div className='frndschat'>
          <div>
            <Chathistory userfrnd={userfrnd}/>
          </div>
      </div>
  </div>
      
</div>
  
  )
}

export default Chatbox
