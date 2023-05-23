import axios from 'axios'
import { BASE_URL } from '../config'


const headers = {
  'Content-Type': 'application/json',
  'Authorization': 'CromBrow2e36'
}

export const getApiAll = (uri: string, body: object) => {
  return axios.get(BASE_URL + uri, {
    ...body
  }).then(res => {
    return res.data
  })
}

export const postApiAll = (uri: string, body: object | any) => {
  return axios.post(BASE_URL + uri, {
    ...body
  }, {
    headers: headers
  })
    .then(res => {
      return res.data
    })
}

export const putApiAll = (uri: string, body: object | any) => {
  return axios.put(BASE_URL + uri, {
    ...body
  }, {
    headers: headers
  })
    .then(res => {
      return res.data
    })
}


export const deleteApiAll = (uri: string, body: object | any) => {
  debugger
  return axios.delete(BASE_URL + uri + '/' + body.id, {
    headers: headers,
  },)
    .then(res => {
      return res.data
    })
}

export function uploadFile(files: any) {

  var formData = new FormData();

  formData.append(`file-123`, files);

  return (
    axios.post(BASE_URL + '/api/UploadFile/UploadFileImageV2', {
      body: formData
    }, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': 'CromBrow2e36'
      }
    }).then(res => {
      return res.data
    })
  )
}