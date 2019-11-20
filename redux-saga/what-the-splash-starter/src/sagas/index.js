import { takeEvery, put, take, call } from 'redux-saga/effects';
import IMAGES from '../constants';

function* workerSaga() {
    // console.log('Hey from worker');
    // console.log(put({type: 'ACTION_FROM_WORKER'}));
    // yield put({type: 'ACTION_FROM_WORKER'});
}

function* byebyeSaga() {
    console.log('Byebye saga');
    console.log(put({type: 'ACTION_FROM_WORKER'}));
    yield put({type: 'ACTION_FROM_WORKER'});
}

function* handleImagesLoad() {
    console.log('fetching images');
}

function* rootSaga() {
    // yield takeEvery('HELLO', workerSaga)
    // yield take('LOGIN');
    // yield call(workerSaga);
    // yield take('LOGOUT');
    // yield call(byebyeSaga);

    takeEvery(IMAGES.LOAD, handleImagesLoad);
}

export default rootSaga;