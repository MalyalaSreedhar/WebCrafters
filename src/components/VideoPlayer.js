import React,{Component} from 'react'


const VideoPlayer = (props)=>{
  if(!props.videoplayer){
    return <h1>Loading...........</h1>
}

const url = `https://www.youtube.com/embed/${props.videoplayer.id.videoId}`;
  return (

    <div>
      <iframe src={url}></iframe>
    </div>
  )
}


export default VideoPlayer;
