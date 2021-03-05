import React from 'react';
import {Provider} from 'react-redux';
import configStore from './store/configStore';
import AppMovies from './pages/appMovies';

const { store } = configStore({});
const Movies = () =>{
    return(
        <Provider store={store}>
            <AppMovies/>
        </Provider>
    )
}
export default Movies;