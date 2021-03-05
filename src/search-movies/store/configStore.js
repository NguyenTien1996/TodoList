import {applyMiddleware , createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import rootReducer from '../reducer/index';
import rootSaga from '../saga/index';

const sagaMiddleware = createSagaMiddleware();

const configStore = (loadState = {}) => {
    const store = createStore(
        rootReducer,
        loadState,
        applyMiddleware(
            sagaMiddleware,
            logger
        )
    );
    sagaMiddleware.run(rootSaga);
    return { store }
}
export default configStore;