import { all, call} from 'redux-saga/effects';
import  searchMovieSaga from './search-saga';

export default function* rootSaga(){
    yield all([
        call(searchMovieSaga),
        //neu cos nhieu saga nua call ow day

    ])
}