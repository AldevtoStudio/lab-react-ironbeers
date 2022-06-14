import axios from 'axios';

const beersApi = axios.create({ baseURL: 'https://ih-beers-api2.herokuapp.com/beers' });

export const getBeers = () => beersApi.get('/').then((response) => response.data);

export const getBeer = (id) => beersApi.get(`/${id}`).then((response) => response.data);

export const getRandomBeer = () => beersApi.get('/random').then((response) => response.data);

export const createBeer = (beer) => beersApi.post('/new', beer).then((response) => response.data);

export const searchBeer = (query) =>
  beersApi.get(`/search?q=${query}`).then((response) => response.data);
