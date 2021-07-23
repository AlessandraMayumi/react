import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {

    state = { images: [] };

    onSearchSubmit = async (term) => {
        const response = await axios.get( 'https://api.unsplash.com/photos', {
            params: {
                query: term
            },
            headers: {
                Authorization: 'Client-ID Uusl5F1Q6rpv7OKevgUKzNH4uSB8pNXa4NvW8gGDAhI' 
            }
        });
        this.setState({images:response.data})
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px'}}>
                <SearchBar onSubmit={ this.onSearchSubmit } />
                Found: { this.state.images.length } images
            </div>
        )
    }
}

export default App;