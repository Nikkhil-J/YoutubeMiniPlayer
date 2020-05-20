import React, {Component} from 'react';
import './App.css';
import Search from './components/Search';
import youtube from './apis/Youtube'
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';

const KEY ='AIzaSyDnXaItSmk1apdhbV-gtnjc1hwoLM845v4'


class App extends Component {

    state= {
      videos:[],
      selectedVideo: null
    }

    componentDidMount() {
      this.onTermSubmit('reactjs')
    }

    onTermSubmit =async term => {
    const response = await youtube.get('/search',{
      params: {
        q: term,
        part:'snippet',
        maxResults: 5,
        key : KEY
      }
    })

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    })
  }

  onVideoSelect = video => {
    this.setState({selectedVideo : video})
  }

  render(){
  return (
    <div className="wrapper">
      <div className="App ui container">
      <Search onTermSubmit={this.onTermSubmit}/>
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={this.state.selectedVideo}/>
          </div>
          <div className="five wide column">
            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
}

export default App;
