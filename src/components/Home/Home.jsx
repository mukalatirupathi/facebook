import React from 'react'
import "./home.css";
import Rightbar from '../rightbar/Rightbar'
import Leftbar from '../leftbar/Leftbar'
import Stories from '../stories/Stories';
import Stories12 from '../stories/Stories';
import Posts from '../posts/Posts';


const Home = ({theme,darkmode}) => {
  return (
    <div className={`home ${darkmode ? theme :''} `}>
     
      <div> 
      <Stories12/>
      <Posts/>
      </div>  
  
     
    </div>
  )
}

export default Home
