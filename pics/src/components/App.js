import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {

    onSearchSubmit (term) {
        console.log(term);
        axios.get( 'https://api.unsplash.com/photos', {
            params: {
                query: term
            },
            headers: {
                Authorization: 'Client-ID Uusl5F1Q6rpv7OKevgUKzNH4uSB8pNXa4NvW8gGDAhI' 
            }
        });
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px'}}>
                <SearchBar onSubmit={ this.onSearchSubmit } />
            </div>
        )
    }
}

export default App;