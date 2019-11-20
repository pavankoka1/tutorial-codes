import IMAGES from '../constants';

const imagesRedcuer = ( state = [], action ) => {
    if( action  === IMAGES.LOAD_SUCCESS) {
        return [ ...state, ...action.images];
    }
    return state;
};

export default imagesRedcuer;