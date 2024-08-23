import React from 'react'
import MessageIcon from '@mui/icons-material/Message';
import "./chatbox.css";
import Messagelist from "../../FackApis/ChatboxData";
import HomeIcon from '@mui/icons-material/Home';

const Chatbox = () => {
  return (
<div>
  <div className='frnds'>
    <div className='chatcontacts'>
      <div className='chatbox mt-3'>
        <h4>messages</h4>
        <button className='messbutton'><MessageIcon/></button>
        <button className='btn btn-primary homechat'>< HomeIcon/></button>
      </div>
      <div>
        <input type="text" className='form-control' placeholder='search your fav person'/>
      </div>
      <div>
        {
          Messagelist.map((message)=>(
            <div  className="chat" key={message.id}>
                <img  className="chatimg" src={message.img}></img>
                <h6 className='mt-3'>{message.name}</h6>
            </div>
          ))
        }
      </div>
      </div> 
        <div className='frndschat'>
          <div>
            
          </div>
      </div>
  </div>
      
</div>
  
  )
}

export default Chatbox
