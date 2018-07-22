import React,{Component} from 'react';
import axios from 'axios';
import youtubeSearch from 'youtube-api-search';
import VideoList from './VideoList'
import VideoPlayer from './VideoPlayer'


class YoutubeApi extends Component{

  constructor(props){
    super(props)
    this.state = {
      videos:[],
      videoSelected:null,

    }
this.videoSearchWithTerm = this.videoSearchWithTerm.bind(this)
  }

  componentDidMount(){
      this.videoSearchWithTerm('sachin')
    }

    videoSearchWithTerm(term){
      const api_key = 'AIzaSyDfkv8VkhB735Wswnz7q0wIj11zjZG58gM';

      youtubeSearch({key:api_key,term:term},(videos)=>{

         this.setState(
           {
             videos:videos,
             videoSelected:videos[0],

           }
         )
       });
    }


  render(){

    return (
      <div>
          <h1>WebCrafts Assignment</h1>
          <label>Search Here:</label>
          <input type="text"  onChange={(event)=>this.videoSearchWithTerm({search:event.target.value})}/>
          <VideoPlayer videoplayer={this.state.videoSelected}/>
          <VideoList videos={this.state.videos} clicked={(videoSelected)=>this.setState({videoSelected})}/>
      </div>
    )
  }
}

export default YoutubeApi;
