import axios from 'axios'
import { BASE_URL } from '../config'

export const getApiAll = (uri: string, body:object) => {
    return axios.get(BASE_URL + uri, {
        ...body
      }).then(res => {
        return res.data
      })
}

export const postApiAll = (uri:string, body:object | any) => {
    return axios.post(BASE_URL + uri, {
        ...body
      },{
        headers: { 
          'Content-Type': 'application/json' ,
          'Authorization': 'CromBrow2e36'
        },
      })
      .then(res => {
        return res.data
      })
}

export const putApiAll = (uri:string, body:object | any) => {
  return axios.put(BASE_URL + uri, {
      ...body
    },{
      headers: { 
        'Content-Type': 'application/json' ,
        'Authorization': 'CromBrow2e36'
      },
    })
    .then(res => {
      return res.data
    })
}


export const deleteApiAll = (uri:string, body:object | any) => {
  return axios.delete(BASE_URL + uri, {
      ...body
    })
    .then(res => {
      return res.data
    })
}