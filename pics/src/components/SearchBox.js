import React from 'react';

class SearchBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = { term: '' };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onClickSubmit(this.state.term);
    }

    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.handleSubmit}>
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text" value={this.state.term} onChange={e => this.setState({ term: e.target.value })} />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBox;