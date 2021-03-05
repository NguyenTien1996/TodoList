import React from 'react';
import SearchMovies from '../components/search';
import Result from '../components/result';

const AppMovies = () => {
    return(
        <>
            <SearchMovies/>
            <Result/>
        </>
    )
}
export default React.memo(AppMovies)