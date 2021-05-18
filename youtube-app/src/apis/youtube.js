import axios from 'axios';

const KEY = 'AIzaSyCzLMgFnVqdzp0lZAE17am7I3z5seRJXaI';

export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params : {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})