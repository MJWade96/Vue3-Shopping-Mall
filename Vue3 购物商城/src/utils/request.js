import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://www.fastmock.site/mock/ae8e9031947a302fed5f92425995aa19/jd',
  timeout: 10000
})

export function get (url, params = {}) {
  return instance.get(url, { params }).then((response) => {
    return response.data
  }, err => {
    return err
  })
}

// --- 与jingdong9-5文件夹内 代码不同
export function post (url, data) {
  return instance.post(url, data, {
    headers: {
      'Content-Type': 'application/json'
    }
  }).then((response) => {
    return response.data
  }, (err) => {
    return err
  })
}
