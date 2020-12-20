import axios from 'axios'

export const getData = axios.create({
  baseURL: 'https://frontend-test.idaproject.com/api',
  headers: {
    accept: 'application/json'
  },
  validateStatus(status) {
    return status >= 200 && status < 500
  }
})
