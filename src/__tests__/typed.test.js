import * as _ from '../utils/typed'
import { expect, test, describe, it } from 'vitest'

describe('类型判断模块', () => {
  describe('isNumber 判断是否数值类型', () => {
    it('null 不是数值类型', () => {
      const mockData = null
      const result = _.isNumber(mockData)
      expect(result).toBe(false)
    })
    it('undefined 不是数值类型', () => {
      const mockData = undefined
      const result = _.isNumber(mockData)
      expect(result).toBe(false)
    })
    it('布尔值不是数值类型', () => {
      const mockData = true
      const result = _.isNumber(mockData)
      expect(result).toBe(false)
    })
    it('class 类不是数值类型', () => {
      class Data {}
      const mockData = new Data()
      const result = _.isNumber(mockData)
      expect(result).toBe(false)
    })
    it('NaN 不是数值类型', () => {
      const mockData = NaN
      const result = _.isNumber(mockData)
      expect(result).toBe(false)
    })
    it('Infinity 是数值类型', () => {
      const mockData = Infinity
      const result = _.isNumber(mockData)
      expect(result).toBe(true)
    })
    it('[1,2,3] 不是数值类型', () => {
      const mockData = [1, 2, 3]
      const result = _.isNumber(mockData)
      expect(result).toBe(false)
    })
    it('对象不是数值类型', () => {
      const mockData = {}
      const result = _.isNumber(mockData)
      expect(result).toBe(false)
    })
    it('123 是数值类型', () => {
      const mockData = 123
      const result = _.isNumber(mockData)
      expect(result).toBe(true)
    })
    it('123.456 是数值类型', () => {
      const mockData = 123.456
      const result = _.isNumber(mockData)
      expect(result).toBe(true)
    })
    it('"123.456" 不是数值类型', () => {
      const mockData = '123.456'
      const result = _.isNumber(mockData)
      expect(result).toBe(false)
    })
    it('String("abc") 不是数值类型', () => {
      const mockData = String('abc')
      const result = _.isNumber(mockData)
      expect(result).toBe(false)
    })
  })

  describe('isString 判断是否字符串类型', () => {
    it('null 不是字符串类型', () => {
      const mockData = null
      const result = _.isString(mockData)
      expect(result).toBe(false)
    })
    it('undefined 不是字符串类型', () => {
      const mockData = undefined
      const result = _.isString(mockData)
      expect(result).toBe(false)
    })
    it('false 不是字符串类型', () => {
      const mockData = false
      const result = _.isString(mockData)
      expect(result).toBe(false)
    })
    it('class 类不是字符串类型', () => {
      class Data {}
      const mockData = new Data()
      const result = _.isString(mockData)
      expect(result).toBe(false)
    })
    it('22 不是字符串类型', () => {
      const mockData = 22
      const result = _.isString(mockData)
      expect(result).toBe(false)
    })
    it('数组不是字符串类型', () => {
      const mockData = [1, 2, 3]
      const result = _.isString(mockData)
      expect(result).toBe(false)
    })
    it('对象不是字符串类型', () => {
      const mockData = {}
      const result = _.isString(mockData)
      expect(result).toBe(false)
    })
    it('"abc" 是字符串类型', () => {
      const mockData = 'abc'
      const result = _.isString(mockData)
      expect(result).toBe(true)
    })
    it('String("abc") 是字符串类型', () => {
      const mockData = String('abc')
      const result = _.isString(mockData)
      expect(result).toBe(true)
    })
  })
})
