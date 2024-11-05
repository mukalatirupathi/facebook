import React from 'react'
import Userstory from './Userstory'
import Stories from '../../FackApis/StoriesData'
import './stories.css'

const Stories12= () => {
  return (
    <div className='stories'>
      <div className='story'>
      <Userstory/>
        {
            Stories.map((story)=>(
              <div key={story.id} className="story-container">
                  <div>
                    <img  className='storyProfile' src={story.storyProfile}/>
                   </div>
                  <div>
                    <img  className='img' src={story.story}/> 
                  </div>
                  <h6 >{story.name}</h6>
                
               
              </div>
           ))
        }
      </div>
    </div>
  )
}

export default Stories12
