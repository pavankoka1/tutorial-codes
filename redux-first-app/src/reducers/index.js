import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'Memories', duration: '4:05' },
        { title: 'Sugar', duration: '5:15' },
        { title: 'See you again', duration: '3:55' },
        { title: 'Animals', duration: '2:35' }
    ];
}

const selectSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectSongReducer
});