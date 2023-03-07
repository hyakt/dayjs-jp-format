import { getJpYear, getJpEra } from '../utils'

describe('utils', () => {
  describe('getJpYear', () => {
    it('could convert the year correctly', () => {
      const actualDateString = '2020-06-24'
      expect(getJpYear(new Date(actualDateString))).toBe('令和2')
    })
    it('Returns an error message when pass in an invalid date', () => {
      const actualDateString = '9999-99-99'
      expect(getJpYear(new Date(actualDateString))).toBe('該当なし')
    })
  })

  describe('getJpYear', () => {
    it('could convert the year correctly', () => {
      const actualDateString = '2020-06-24'
      expect(getJpEra(new Date(actualDateString))).toBe('令和')
    })
    it('Returns an error message when pass in an invalid date', () => {
      const actualDateString = '9999-99-99'
      expect(getJpEra(new Date(actualDateString))).toBe('不明')
    })
  })
})
