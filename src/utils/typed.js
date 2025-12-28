/**
 * 判断给定值是否为数字
 * @param {*} value - 待检测的值
 * @returns {boolean} 若 value 是数字则返回 true，否则返回 false
 */
export const isNumber = (value) => {
  try {
    return Number(value) === value
  } catch {
    return false
  }
}

/**
 * 判断给定值是否为字符串
 * @param {*} value - 待检测的值
 * @returns {boolean} 若 value 是字符串则返回 true，否则返回 false
 */
export const isString = (value) => {
  return typeof value === 'string' || value instanceof String
}
