import React from 'react'
import "./friendrequest.css"
import  Firends from "../../FackApis/FirendReqData"
const FriendRequest = ({darkmode,theme}) => {
  return (
    <div className={`frndrequest ${darkmode ? theme :''}  mt-2`}>
      <h4 >FriendRequest</h4>
      <div>
        {
            Firends.map(frnd=>(
                <div>
                    <img className='frndimg mt-2' src={frnd.img}/>
                    <h6 >{frnd.info}</h6>
                    <div>
                        <button className='btn btn-primary reqbutton'>Accept</button>
                        <button className='btn btn-danger'>delete</button>
                    </div>
                </div>
            
            ))
        }
      </div>
    </div>
  )
}

export default FriendRequest
