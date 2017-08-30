import Axios from 'axios'
import Jsonp from 'jsonp'
import Qs from 'qs/dist/qs'

const request = {
  get (url, params) {
    var obj = {
      params: params
    }
    return Axios.get(url, obj)
  },
  post (url, params) {
    return Axios.post(url, params)
  },
  post_formdata (url, params) {
    return Axios.post(url, params, {
      headers: {
        'content-type': 'multipart/form-data; charset=UTF-8'
      }
    })
  },
  post_payload (url, params) {
    return Axios.post(url, Qs.stringify(params), {
      headers: {
        'content-type': 'application/x-www-form-urlencoded;charset=UTF-8'
      }
    })
  },
  post_json (url, params) {
    return Axios.post(url, params, {
      headers: {
        'content-type': 'application/json;charset=UTF-8'
      }
    })
  },
  jsonp (url, params) {
    url += (url.indexOf('?') > -1 ? '&' : '?') + Qs.stringify(params)
    var promise = new Promise((resolve, reject) => {
      Jsonp(url, null, function (error, result) {
        if (error) {
          reject(error)
        } else {
          resolve(result)
        }
      });
    });
    return promise
  }
}

export default request;
