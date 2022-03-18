import axios from 'axios'

export const API_BASE_URL = 'https://piar.meew.me'

export const HEADERS = {
  "Content-Type": "application/json",
  "Accept": "application/json",
}


export const httpClient = axios.create({
  baseUrl: API_BASE_URL,
  headers:HEADERS,
})

export const setAuthToken = (token) => {
  if (token) {
    httpClient.defaults.headers.common["user-jwt"] = token;
  }
};

export const dropAuthToken = () => {
  delete httpClient.defaults.headers.common["user-jwt"];
};

export const onApiError = (err) => {
  if (!err || !err.response) {
    alert(`api error her with error ${err.response.status}`)
  }
  alert('Please enter correct information')
}
