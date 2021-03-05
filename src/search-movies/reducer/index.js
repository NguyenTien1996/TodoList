import {combineReducers } from 'redux';
import { searchMoviesReducer } from './searchReducer';

const rootReducer = combineReducers ({
    searchMovie: searchMoviesReducer(),
})

export default rootReducer;