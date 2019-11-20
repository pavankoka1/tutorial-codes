import { IMAGES } from '../constants/index';

const loadImages = () => ({
    type: IMAGES.LOAD,
})

const setImages = images => ({
    type: IMAGES.IMAGES_LOAD_SUCCESS,
    images,
})

const setError = error => ({
    type: IMAGES.IMAGES_LOAD_FAIL,
    error,
}) 

export {
    loadImages,
    setImages,
    setError,
};