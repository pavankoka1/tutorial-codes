import loadingReducer from './loadingReducer';
import errorReducer from './errorReducer';
import imagesReducer from './imagesReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    isLoading: loadingReducer,
    images: imagesReducer,
    error: errorReducer,
});

export default rootReducer;