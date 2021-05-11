import axios from 'axios'

const photoBaseUrl = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol='
const manifestBaseUrl = 'https://api.nasa.gov/mars-photos/api/v1/manifests/Curiosity/?'

const API_KEY = `api_key=${process.env.REACT_APP_API_KEY}`

export function getAllPhotos(day) {
  // console.log('API Call: ', photoBaseUrl + day + '&' + API_KEY)
  return axios.get(photoBaseUrl + day + '&' + API_KEY)
}

export function getManifest() {
  // console.log(manifestBaseUrl + API_KEY)
  return axios.get(manifestBaseUrl + API_KEY)
}
//https://api.nasa.gov/mars-photos/api/v1/manifests/Curiosity/?api_key=API_KEY