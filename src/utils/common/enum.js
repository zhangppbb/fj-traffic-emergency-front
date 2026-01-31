/**
 * 开发环境
 */
export class DevelopmentEnvEnum {
  // DEV 环境
  static get DEV() {
    return 'development'
  }

  // 预发布环境
  static get STAGE() {
    return 'stage'
  }

  // PRODUCT 环境
  static get PRODUCT() {
    return 'product'
  }
}

/**
 * 日志类型枚举
 */
export class LogTypeEnum {
  // 调试信息
  static get DEBUG() {
    return 'debug'
  }

  // 正常信息
  static get INFO() {
    return 'info'
  }

  // 警告信息
  static get WARN() {
    return 'warn'
  }

  // 错误信息
  static get ERROR() {
    return 'error'
  }
}
