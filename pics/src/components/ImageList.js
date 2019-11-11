import React from 'react';
import ImageCard from './imageCard';
import '../common/images.css';

class ImageList extends React.Component {

    constructor(props) {
        super(props);

        this.state = { height: null };
    }

    componentDidUpdate(prevProps) {
        if (JSON.stringify(prevProps.images) !== JSON.stringify(this.props.images)) {
            this.setState({ height: 0 });
        }
    }

    handleHeight = (val) => {
        let states = { ...this.state };
        states.height += val / 5;
        this.setState(states);
    }

    render() {

        const mapImages = this.props.images.map((image) => {
            return <ImageCard key={image.id} image={image} handleHeight={this.handleHeight} />
        });

        return <div className="images" style={{ height: `${this.state.height + 150}px` }}>{mapImages}</div>

    }
}

export default ImageList;