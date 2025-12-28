import { formatDate } from './utils/date.js'
import { isNumber, isString } from './utils/typed.js'

export { formatDate, isNumber, isString }

/**
 * 全局挂载 HtnnJsToolkit 工具库
 */
if (typeof window !== 'undefined') {
  window.HtnnJsToolkit = {
    formatDate,
    isNumber,
    isString,
  }
}
