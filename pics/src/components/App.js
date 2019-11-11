import React from 'react';
import SearchBox from './SearchBox';
import unsplash from '../api/unsplash';
import ImageList from './ImageList';

class App extends React.Component {

    state = { images: [] };

    onClickSubmit = async (val) => {
        const res = await unsplash.get('/search/photos', {
            params: { query: val },
        });

        let states = { ...this.state };
        states.images = res.data.results;
        this.setState(states);
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBox onClickSubmit={this.onClickSubmit} height={null} />
                <ImageList images={this.state.images} />
            </div>
        );
    }
}

export default App;