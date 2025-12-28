import { formatDate } from '../utils/date'
import { expect, test, describe, it } from 'vitest'

describe('formatDate 日期格式化函数', () => {
  it('应该正确格式化默认日期为 YYYY-MM-DD 格式', () => {
    const mockDate = new Date(2025, 11, 28)
    const result = formatDate(mockDate)
    expect(result).toBe('2025-12-28')
  })

  it('应该支持自定义格式', () => {
    const mockDate = new Date(2025, 0, 5)
    const result = formatDate(mockDate, 'YYYY/MM/DD')
    expect(result).toBe('2025/01/05')
  })

  it('应该支持时间戳', () => {
    const mockDate = 1766908214000
    const result = formatDate(mockDate, 'YYYY/MM/DD')
    expect(result).toBe('2025/12/28')
  })
})
