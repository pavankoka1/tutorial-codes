import React from 'react';

class imageCard extends React.Component {
    constructor(props) {
        super(props);

        this.imageRefs = React.createRef();
    }

    componentDidMount() {
        this.imageRefs.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        this.props.handleHeight(this.imageRefs.current.clientHeight);
    }

    render() {
        let image = this.props.image;
        return (
            <div>
                <img ref={this.imageRefs} className="image" src={image.urls.regular} alt={image.description} />
            </div>
        );
    }
}

export default imageCard;