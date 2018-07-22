import React,{Component} from 'react';
import axios from 'axios';
import youtubeSearch from 'youtube-api-search';
import VideoList from './VideoList'
import VideoPlayer from './VideoPlayer'
//const API_KEY = 'AIzaSyDfkv8VkhB735Wswnz7q0wIj11zjZG58gM';

// youtubeSearch({key:API_KEY,term:'sachin'},function(data){
//   console.log(data)
//  });

class YoutubeApi extends Component{

  constructor(props){
    super(props)
    this.state = {
      videos:[],
      videoSelected:null
    }

  }

  componentDidMount(){
      const api_key = 'AIzaSyDfkv8VkhB735Wswnz7q0wIj11zjZG58gM';

      youtubeSearch({key:api_key,term:'rajnikanth'},(videos)=>{

         this.setState(
           {
             videos:videos,
             videoSelected:videos[0]
           }
         )
       });

    }



  render(){

    return (
      <div>
          <h1>WebCrafts Assignment</h1>
          <VideoPlayer videoplayer={this.state.videoSelected}/>
          <VideoList videos={this.state.videos} clicked={(videoSelected)=>this.setState({videoSelected})}/>
      </div>
    )
  }
}

export default YoutubeApi;
