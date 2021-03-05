import axios from 'axios';

const GetDataUser = async (page) => {
    const perPage = 3;
    const url = `https://reqres.in/api/users?page${page}&per_page=${perPage}`;
    const response = await axios.get(url);
    const data = await response.status === 200 ? response.data : [];
    return data;
}

export const api = {
    GetDataUser
}