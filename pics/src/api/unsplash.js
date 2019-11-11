import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 7285715ca49174d3e7168d5dd0ed2c78b3503fa1bbb65502dd9acdd8335e3dc0'
    }
});