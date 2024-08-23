import React from 'react'
import Feeds from '../../FackApis/HomeFeedData'
import './posts.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CommentIcon from '@mui/icons-material/Comment';
import TelegramIcon from '@mui/icons-material/Telegram';
import { useState } from 'react';

const Posts = () => {
  const[like,setlike]=useState(0);
  return (
    <div>
      {
        Feeds.map((post)=>(
            <div>
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
  )
}

export default Posts

