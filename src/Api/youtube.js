import axios from 'axios';

const KEY = 'AIzaSyD8UxpHNQU5VKjm3vyKDdbKufJlwqpvGNY';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: `${KEY}`
    }
});

