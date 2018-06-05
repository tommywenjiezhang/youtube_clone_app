import React ,{ Component} from 'react';
import  ReactDOM from 'react-dom'
import  _ from  'lodash'
import YTSearch from 'youtube-api-search'
import SearchBar from './components.js/search_bar'
import VideoList from './components.js/video_list'
import VideoDetail from './components.js/video_detail'

const API_KEY = 'AIzaSyBDM88W-Z1dwCKkhqIfyWxGW4COKa6q56c'


// Create a new component.This component should produce some html
class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      videos: [],
      selectedVideo:null
    };
  }
  videoSearch(term){
    YTSearch ({key:API_KEY,term:term},(videos) => {
      this.setState({
        videos:videos,
        selectedVideo: videos[0]
      })
      // the above line can be written for this.state({videos: videos})
      console.log(videos)
    })
  }
  render(){
    const videoSearch = _.debounce((term) => {this.videoSearch(term)},300)
    return (
        <div>
            <SearchBar onSearchTermChange={term => videoSearch}/>
            <VideoDetail video = {this.state.selectedVideo}/>
            <VideoList
              onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
              videos = {this.state.videos}
            />
        </div>
      )
  }
}


// Take this component's generateate Html and put it on the page
ReactDOM.render(<App />,document.querySelector('.container'))
