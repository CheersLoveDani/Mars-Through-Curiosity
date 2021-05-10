import axios from 'axios'

const photoBaseUrl = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol='

const API_KEY = `& api_key=${process.env.REACT_APP_API_KEY}`

export function getAllPhotos() {
  return axios.get(`${photoBaseUrl} 2754${API_KEY} `)
}

// https://api.nasa.gov/mars-photos/api/v1/manifests/rovers/curiosity&api_key=Bu4Kx1OEw6hUEvID71Ebl9r4k3GXPEQ5kx5I1Wjf