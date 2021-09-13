import { useState, useEffect } from 'react';
import youtube from '../apis/youtube';

const useVideos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([]);
    console.log(defaultSearchTerm)
    
    useEffect(() => {
        search(defaultSearchTerm)
    }, []); // empty array means, run this function only one time

    const search = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });

        setVideos(response.data.items);
    };

    return [videos, search];
};

export default useVideos;