import React from 'react'
import './proflie.css';
import CurrentUser from '../../FackApis/CurrentUserData'
import MessageIcon from '@mui/icons-material/Message';
import ShareIcon from '@mui/icons-material/Share';
import Feeds from '../../FackApis/HomeFeedData'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CommentIcon from '@mui/icons-material/Comment';
import { useState } from 'react';
import TelegramIcon from '@mui/icons-material/Telegram';
const Proflie = () => {
  const[like,setlike]=useState(0);
  return (
    <div className='container-fluid'>
      <div className='proflie'>
        {
            CurrentUser.map((userprofile)=>(
                <div>
                    <img className='coverphoto' src={userprofile.CoverPhoto}/>
                    <img className='profliephoto'src={userprofile. ProfieImage}/>
                    <div className='username'>
                        <h4>{userprofile.name}</h4>
                        <h6>{userprofile.username}</h6>
                    </div>
                    <div className='userbutton mt-2'>
                        <button className='btn btn-primary'><MessageIcon/></button>
                        <buton className='btn btn-primary followbutton'>follow me</buton>
                        <button className='btn btn-primary'>< ShareIcon/></button>
                    </div>
                    <div >
                        <p className='mt-4' >we are all bad in someone story's</p>
                    </div>
                </div>
            ))
        }
      </div>
      <div>
      {
        Feeds.map((post)=>(
            <div className='userposts'>
                <div className='postheader'>
                    <img className='postProfile' src={post.feedProfile}/>
                    <h6 className='mt-2 m-1'>{post.name}</h6>
                </div>
                <div  className='postbody'>
                    <p>{post.desc}</p>
                    <img className='postimg' src={post.feedImage}/>
                </div>
                <div  className='postfooter'>
                   <button className='likebutton' onClick={()=>(setlike(like+1))}><span><FavoriteBorderIcon/>{like}likes</span></button>
                   <button><span> <CommentIcon/>6comments</span></button>
                    <button><span><TelegramIcon/>2share</span></button>
                </div>
            </div>
           
        ))
        
      }
      </div>
    </div>
  )
}

export default Proflie
