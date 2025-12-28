/**
 * 格式化日期
 * @param {Date|number} date - 日期对象或时间戳
 * @param {string} format - 格式化字符串，默认 'YYYY-MM-DD'
 * @returns {string} 格式化后的日期字符串
 */
export const formatDate = (date = new Date(), format = 'YYYY-MM-DD') => {
  const d = new Date(date)
  const year = d.getFullYear()
  const month = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return format.replace('YYYY', year).replace('MM', month).replace('DD', day)
}
