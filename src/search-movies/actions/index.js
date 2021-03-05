import * as types from './types';

export const searchMovies = (nameMovies) => ({
    type: types.SEARCH_MOVIES,
    nameMovies 
});

export const startSearchMovies = (loading) => ({
    type: types.START_SEARCH_MOVIES,
    loading
});

export const endSearchMovies = (loading) => ({
    type: types.END_SEARCH_MOVIES,
    loading
});

export const searchMoviesSuccess = (movies) => ({
    type: types.SEARCH_MOVIES_SUCCESS,
    movies
});

export const searchMoviesFail = (error) => ({
    type: types.SEARCH_MOVIES_FAIL,
    error
});