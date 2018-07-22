import React from 'react';
import './IndividualVideo.css'

const IndividualVideo = (props)=>{
const video  = props.video
const image = video.snippet.thumbnails.default.url;
console.log(video)
console.log(image)
  return (
    <div className="main" onClick={()=>props.onvideoClick(video)}>
        <p>{video.snippet.title}</p>
      <div className="innerDiv">
          <img src={image}/>
        </div>
    </div>
  )
}


export default IndividualVideo;
