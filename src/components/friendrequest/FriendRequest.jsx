import React from 'react'
import "./friendrequest.css"
import  Firends from "../../FackApis/FirendReqData"
const FriendRequest = ({darkmode,theme}) => {
  const handleaccept=(id,name) => {
    alert(`"you accepted ${name} request"`);

  };
  const handledelete=(id,name)=>{
    alert(`"you  not accepted ${name} request"`);
  }
  return (
    <div className={`frndrequest ${darkmode ? theme :''}  mt-2`}>
      <h4 >FriendRequest</h4>
      <div>
        {
            Firends.map(frnd=>(
                <div key={frnd}>
                    <img className='frndimg mt-2' src={frnd.img}/>
                    <h6 >{frnd.info}</h6>
                    <div>
                        <button className='btn btn-primary reqbutton' onClick={()=>handleaccept(frnd.id,frnd.name)}>Accept</button>
                        <button className='btn btn-danger' onClick={()=>handledelete(frnd.id,frnd.name)}>delete</button>
                    </div>
                </div>
            
            ))
        }
      </div>
    </div>
  )
}

export default FriendRequest;
