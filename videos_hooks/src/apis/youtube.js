import axios from 'axios';

const KEY = 'AIzaSyAW2dnDNINxXqTRqVO5uO97OzLSr7UtVAs';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    },
});

//   'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=surfing&key=[YOUR_API_KEY]' \
//   --header 'Authorization: Bearer [YOUR_ACCESS_TOKEN]' \
//   --header 'Accept: application/json' \
//   --compressed
