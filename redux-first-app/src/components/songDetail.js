import React from 'react';
import { connect } from 'react-redux';

const songDetail = (props) => {
    return <div> {(props.song) ? props.song.title : ''}</div>
};

const mapStateToProps = state => {
    return { song: state.selectedSong }
};

export default connect(mapStateToProps)(songDetail);