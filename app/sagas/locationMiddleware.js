import {all, fork, put, takeEvery, select} from 'redux-saga/effects';
import { hide404 } from '../actions/notFound';

export default function* rootSaga() {
    yield all([
        fork(locationChange)
    ]);
}
let prevLocation = null;
export function* locationChange() {
    yield takeEvery("@@router/LOCATION_CHANGE",locationChangeHandler);
}
export function* locationChangeHandler({payload}){
    if(prevLocation !== payload.location.pathname){
        setTimeout(()=>{
            window.scrollTo(0, 0);
        },1);
        if(payload.location.pathname === ('/authentication/' ||'/login/' || '/forgot-password/')){
            if(prevLocation !== "/verify-code/" && prevLocation !== "/login/" && prevLocation !== "/forgot-password/" ){
                localStorage.setItem('prevLocation',prevLocation === null ? "/" : prevLocation);
            }
        }
    }
    prevLocation = payload.location.pathname;


    yield put(hide404());
}