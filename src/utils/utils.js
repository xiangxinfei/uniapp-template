/** 工具类 */
export default class Utils {
  /**
   * 处理日期时间
   * @param {date} date 日期时间
   * @param {string} fmt 格式
   * @return {string}
   */
  static dateFormat(date, fmt) {
    const o = {
      'M+': date.getMonth() + 1, // 月份
      'd+': date.getDate(), // 日
      'h+': date.getHours(), // 小时
      'm+': date.getMinutes(), // 分
      's+': date.getSeconds(), // 秒
      'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
      S: date.getMilliseconds(), // 毫秒
    }
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
    for (const k in o) {
      if (new RegExp('(' + k + ')').test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
    }
    return fmt
  }

  /**
   * 获取时间
   * @param {*} time 时间
   * @return {string}
   */
  static getTime(time) {
    const today = new Date(this.dateFormat(new Date(), 'yyyy/MM/dd'))
    const thisTime = today.getTime()
    if (thisTime - time < 0) {
      return '今天 ' + this.dateFormat(new Date(time), 'hh:mm')
    } else if (thisTime - time < 24 * 60 * 60 * 1000) {
      return '昨天 ' + this.dateFormat(new Date(time), 'hh:mm')
    } else if (thisTime - time < 48 * 60 * 60 * 1000) {
      return '前天 ' + this.dateFormat(new Date(time), 'hh:mm')
    } else {
      return this.dateFormat(new Date(time), 'yyyy/MM/dd')
    }
  }

  /**
   * 坐标转换
   * @param {number} bdLon 经度
   * @param {number} bdLat 纬度
   * @return {*}
   */
  static bd09togcj02(bdLon, bdLat) {
    bdLon = +bdLon
    bdLat = +bdLat
    const xPI = 3.14159265358979324 * 3000.0 / 180.0
    const x = bdLon - 0.0065
    const y = bdLat - 0.006
    const z = Math.sqrt(x * x + y * y) - 0.00002 * Math.sin(y * xPI)
    const theta = Math.atan2(y, x) - 0.000003 * Math.cos(x * xPI)
    const ggLng = z * Math.cos(theta)
    const ggLat = z * Math.sin(theta)
    return {
      longitude: ggLng,
      latitude: ggLat,
    }
  }

  /**
   * JSON对象转成URL参数
   * @param {*} json 参数
   * @return {*}
   */
  static getUrlParams(json) {
    return JSON.stringify(json).replace(/\{"?/, '?').replace(/"?\}/, '').replace(/"?:"?/g, '=').replace(/"?,"?/g, '&')
  }

  /**
   * URL参数转成JSON对象
   * @param {*} json 参数
   * @return {*}
   */
  static getUrlObject(str) {
    return JSON.parse('{"' + str.replace(/\=/g, '":"').replace(/\&/g, '","') + '"}')
  }

  /**
   * 分割数组
   * @param {array} arrs 一维数组
   * @param {number} size 每个区间大小
   * @return {array} 二维数组
   */
  static sliceArray(arrs, size) {
    const len = arrs.length
    const result = []
    const group = Math.ceil(len / size)
    for (let i = 0; i < group; i++) {
      result.push(arrs.splice(0, size))
    }
    return result
  }

  /**
   * 处理图片
   * @param {string} src 图片地址
   * @param {number} width 宽
   * @param {number} height 高
   * @param {boolean} watermark 水印
   * @return {string} 处理后的图片地址
   */
  static handlePictureSrc(src, width, height, watermark = true) {
    if (src.includes('//saas') || src.includes('//fjb') || src.includes('fangjiabao')) {
      const dotIndex = src.lastIndexOf('.')
      const index = src.indexOf('-', dotIndex)
      src = index === -1 ? src : src.substr(0, index)
      return `${src}-${watermark ? 'w' : ''}${width}x${height}`
    } else {
      return src.replace('{size}', `${width}x${height}`)
    }
  }

  /* 处理倒计时 */
  static handleOverTime(overTime) {
    overTime = parseInt(overTime, 10)
    if (overTime === NaN) {
      return false
    }
    let time = Math.floor((overTime - +new Date()) / 1000)
    if (time <= 0) {
      return false
    } else {
      const day = this.formatNumber(Math.floor(time / (24 * 60 * 60)))
      time = time % (24 * 60 * 60)
      const hour = this.formatNumber(Math.floor(time / (60 * 60)))
      time = time % (60 * 60)
      const minute = this.formatNumber(Math.floor(time / 60))
      const second = this.formatNumber(time % 60)
      return { day, hour, minute, second }
    }
  }

  // 小于10的数字前面加 0
  static formatNumber(number) {
    const n = number.toString()
    return n[1] ? n : '0' + n
  }

  /**
 * 深拷贝
 * @param {*} obj 拷贝对象(object or array)
 * @param {*} cache 缓存数组
 */
  static deepCopy(obj, cache = []) {
    if (obj === null || typeof obj !== 'object') {
      return obj
    }
    // 如果传入的对象与缓存的相等, 则递归结束, 这样防止循环
    const hit = cache.filter(c => c.original === obj)[0]
    if (hit) {
      return hit.copy
    }
    const copy = Array.isArray(obj) ? [] : {}
    // 将copy首先放入cache, 因为我们需要在递归deepCopy的时候引用它
    cache.push({
      original: obj,
      copy
    })
    Object.keys(obj).forEach(key => {
      copy[key] = this.deepCopy(obj[key], cache)
    })
    return copy
  }

  /**
   * 隐藏手机号中间四位
   * @param {*} phone 手机号
   * @return {string}
   */
  static encryptedPhoneNumber(phone, start, end) {
    return `${phone.toString().substring(0, start)}****${phone.toString().substring(phone.toString().length - end)}`
  }
}
