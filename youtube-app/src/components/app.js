import React from 'react';
import SearchBar from './searchBar';
import youtube from '../apis/youtube';
import VideoList from './videoList';
import VideoDetail from './videoDetail'

class App extends React.Component{

    state = {videos:[] , selectedVideos:null};

    onSearchSubmit= async (term)=>{
        const response=await youtube.get('/search',{
            params:{
                q:term
            }
        });
        this.setState({videos:response.data.items})
    };

    onVideoSelect1 = (video) =>{
        this.setState({selectedVideos:video});
    }

    render(){
        return(
            <div className="ui container">
                <SearchBar onFormSubmit={this.onSearchSubmit} />

                <VideoDetail video={this.state.selectedVideos} />

                <VideoList onVideoSelect={this.onVideoSelect1} videos={this.state.videos} />

            </div>
            
        );
    }
}

export default App;