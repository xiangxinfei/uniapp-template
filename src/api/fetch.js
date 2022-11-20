import Config from '../config/config'

/** 请求接口数据 */
export default class Fetch {
  /**
   * 请求接口数据
   * @param {string} url 地址
   * @param {*} params 参数
   * @return {promise}
   */
  static get(url, params, option = {}) {
    return new Promise((resolve, reject) => {
      uni.request({
        url: Config.prefix + url,
        data: { ...params },
        header: {
          'Authorization': option?.token ? option.token : ''
        },
        success(result) {
          if (result.statusCode === 200 && result.data.code === 0) {
            resolve(result.data)
          } else {
            reject(result.data)
          }
        },
        fail() {
          reject(new Error('system error'))
        },
      })
    })
  }

  /**
   * 请求接口数据
   * @param {string} url 地址
   * @param {*} params 参数
   * @return {promise}
   */
  static post(url, params, option = {}) {
    return new Promise((resolve, reject) => {
      uni.request({
        url: Config.prefix + url,
        data: { ...params },
        method: 'POST',
        header: {
          'content-type': 'application/json',
          'Authorization': option?.token ? option.token : ''
        },
        success(result) {
          if (result.statusCode === 200 && result.data.code === 0) {
            resolve(result.data)
          } else {
            reject(result.data)
          }
        },
        fail() {
          reject(new Error('system error'))
        },
      })
    })
  }
}
