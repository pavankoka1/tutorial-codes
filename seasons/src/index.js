import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = { lat: null, errorMessage: '' };
    }

    updateLat(lat) {
        let states = { ...this.state };
        states.lat = lat;
        this.setState(states);
    }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            pos => this.updateLat(pos.coords.latitude),
            err => this.setState({ errorMessage: err.message })
        );
    }

    renderContent() {
        if (!this.state.lat) {
            return <Spinner message='Please click on Allow ... ' />
        }
        return (
            <div>
                <SeasonDisplay lat={this.state.lat} />
            </div>
        );
    }

    render() {
        return <div className="border red">
            {this.renderContent()}
        </div>
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);