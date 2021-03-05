import {put, call, takeLatest} from 'redux-saga/effects';
import * as types from '../actions/types';
import * as actions from '../actions/index';
import * as api from '../service/api';

function* searchMovieSaga({nameMovie}) {
    try{
        yield put(actions.startSearchMovies(true));
        const data = yield call(api.SearchmoviesByKeywork, nameMovie);
        if(data.result.length > 0){
            yield put(actions.searchMoviesSuccess(data))
        }
        else{
            yield put(actions.searchMoviesFail({
                code:404,
                message:'Not found data'
            }));
        }
        yield put(actions.endSearchMovies(false));
    }catch(e){
        yield put(actions.searchMoviesFail(e));
    }
}
//theo doi hd saga
export default function* watchSearchMovieSaga(){
    yield takeLatest(types.SEARCH_MOVIES, searchMovieSaga);
}