import React from 'react';
import IndividualVideo from './IndividualVideo'
const VideoList = (props)=>{
const videos =   props.videos.map((video,index)=>{
    return <IndividualVideo
    key={index}
     video={video}
     onvideoClick={props.clicked}/>
  })

  return (

    <ul>
      {videos}
    </ul>
  )
}


export default VideoList;
