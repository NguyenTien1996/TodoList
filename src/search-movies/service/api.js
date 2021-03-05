import axios from 'axios';

export const SearchmoviesByKeywork = async (keywork, page = 1) => {
    const url = `http://api.themoviedb.org/3/search/movie?query=${keywork}&api_key=cfe422613b250f702980a3bbf9e90716&page=${page}`;
    const response = await axios.get(url);
    const result = response.status === 200 ? response.data : [];
    return result;
}