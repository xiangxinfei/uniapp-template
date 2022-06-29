class Config {
  constructor() {
    // /* 线上 */
    this.prefix = 'http://159.75.201.116:8022/open-api/'
    this.domain = 'http://159.75.201.116:8022'

    /* 本地 */
    this.prefix = 'http://159.75.201.116:8022/open-api/'
    this.domain = 'http://159.75.201.116:8022'

    this.platform = process.env.VUE_APP_PLATFORM

    this.unionId = process.env.VUE_APP_PLATFORM + '-' + (+new Date()) + Math.floor(Math.random() * 10000)
  }
}

export default new Config()
