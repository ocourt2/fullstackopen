import axios from "axios";
const baseUrl = '/api/notes'

// const baseUrl = 'https://small-frog-8141.fly.dev/api/notes';

const getAll = () => {
    const request = axios.get(baseUrl);

    const nonExistant = {
        id: 10000,
        content: 'This note is not saved to server',
        date: '2019-05-30T17:30:31.098Z',
        important: true,
    }

    // return request.then(response => response.data);
    return request.then(response => response.data.concat(nonExistant))
}

const create = (newObject) => {
    const request = axios.post(baseUrl, newObject);
    return request.then(response => response.data);
}

const update = (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject);
    return request.then(response => response.data);
} 

export default {
    getAll,
    create,
    update
}