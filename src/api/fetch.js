import Config from '../config/config'

/** 请求接口数据 */
export default class Fetch {
  /**
   * 请求接口数据
   * @param {string} url 地址
   * @param {*} params 参数
   * @return {promise}
   */
  static get(url, params) {
    return new Promise((resolve, reject) => {
      uni.request({
        url: Config.prefix + url,
        data: { ...params },
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
  static post(url, params) {
    return new Promise((resolve, reject) => {
      uni.request({
        url: Config.prefix + url,
        data: { ...params },
        method: 'POST',
        header: {
          'content-type': 'application/x-www-form-urlencoded',
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
