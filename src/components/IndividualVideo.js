import React from 'react';

const IndividualVideo = (props)=>{
const video  = props.video
const image = video.snippet.thumbnails.default.url;
console.log(video)
console.log(image)
  return (
    <div onClick={()=>props.onvideoClick(video)} className="row">
      <div className="col-md-4">
      {video.snippet.title}
      </div>
      <div className="col-md-8">
        <img src={image}/>
      </div>
      </div>
  )
}


export default IndividualVideo;
