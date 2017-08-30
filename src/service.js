import Vue from 'vue'
import $request from './request'
import $conf from 'configuration'

let service = {

  request(key, params, option) {
    // Vue.$vux.loading.show();
    key = key || ''
    params = params || {}
    option = option || {}

    let
      config = {},
      url = key,
      baseUrl = option.hasOwnProperty('baseUrl') ? option.baseUrl : $conf.baseUrl,
      keyExtend = option.hasOwnProperty('keyExtend') ? option.keyExtend : '',
      urlParams = option.hasOwnProperty('urlParams') ? option.urlParams : {},
      logError = (msg, status, headers, config_) => {
        try {
          var err = {}
          err.err = 1
          err.key = key
          err.params = params
          err.msg = msg
          err.status = status
          err.headers = headers
          err.config = config_
          console.log(err);
          // Vue.$vux.loading.hide();
          return err
        } catch (e) {
          console.log(e)
          return e
        }
      }

    if ($conf.isMock) {
      url = $conf.mockPath + key + '.json'
    } else {
      if (url && url.indexOf('http://') < 0 && url.indexOf('https://') < 0 && $conf.methods && $conf.methods.hasOwnProperty(key)) {
        url = baseUrl + $conf.methods[key]
      }
    }

    if ($conf.isMock) {
      config = Vue.copy(option, {
        method: 'get'
      });
    } else {
      config = Vue.copy({
        method: 'JSONP'
      }, option);
    }

    let self = this;
    return this.getUser().then(function(respond) {
      if (respond) {
        self.setLoginName(respond, params);
        self.setToken(respond, params);
      }

      // 根据不同的请求方式，使用不同的请求方法
      if (config.method == 'POST_FORMDATA') {
        // 'Content-Type'为 'multipart/form-data; charset=UTF-8'
        var fd = new FormData()
        for (var i in params) {
          fd.append(i, params[i])
        }
        return new Promise((resolve, reject) => {
          $request.post_formdata(url, fd).then(
            result => {
              resolve(result.data)
              // Vue.$vux.loading.hide()
            },
            logError
          )
        })
      } else if (config.method === 'POST_PAYLOAD') {
        // 'Content-Type'为 'application/x-www-form-urlencoded; charset=UTF-8'
        return new Promise((resolve, reject) => {
          $request.post_payload(url, params).then(
            result => {
              resolve(result.data)
              Vue.$vux.loading.hide();
            },
            logError
          )
        })
      } else if (config.method == 'post' || config.method == 'POST_JSON') {
        if (config.method == 'POST_JSON') {
          params = JSON.stringify(params)
        }

        return new Promise((resolve, reject) => {
          $request.post_json(url, params).then(
            result => {
              resolve(result.data)
              // Vue.$vux.loading.hide()
            },
            logError
          )
        })
      } else if (config.method == 'get') {
        return new Promise((resolve, reject) => {
          $request.get(url, params).then(
            result => {
              resolve(result.data)
              // Vue.$vux.loading.hide()
            },
            logError
          )
        })
      } else {
        return new Promise((resolve, reject) => {
          $request.jsonp(url, params).then(
            result => {
              resolve(result.data)
              // Vue.$vux.loading.hide()
            },
            logError
          )
        })
      }
    })
  },
  /* 自定义方法 start */

  //获取用户人事范围等完整信息
  submitForm(params) {
    console.log(params)
    return this.request('submitForm', params, {
      method: 'post'
    })
  },

}

export default service
