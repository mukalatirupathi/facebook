import React from 'react'
import Userstory from './Userstory'
import Stories from '../../FackApis/StoriesData'
import './stories.css'

const Stories12= () => {
  return (
    <div className='big'>
      <div className='prof'>
      <Userstory/>
        {
            Stories.map((story)=>(
              <div key={story.id}>
                  <div>
                    <img  className='storyProfile' src={story.storyProfile}/>
                   </div>
                
                <div className='story'>
                  <img  className='img' src={story.story}/> 
                </div>
                <h6>{story.name}</h6>
               
              </div>
           ))
        }
      </div>
    </div>
  )
}

export default Stories12
