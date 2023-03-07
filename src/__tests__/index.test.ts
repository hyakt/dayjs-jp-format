import { jpFormat } from '../'
import * as dayjs from 'dayjs'

describe('index', () => {
  dayjs.extend(jpFormat)

  it('could use the standart format', () => {
    const actualDateString = '2020-06-24'
    expect(dayjs(actualDateString).format('YYYY-MM-DD')).toBe('2020-06-24')
  })

  it('could convert the year correctly', () => {
    const actualDateString = '2020-06-24'
    expect(dayjs(actualDateString).format('rrrr')).toBe('令和2')
  })

  it('could convert the era correctly', () => {
    const actualDateString = '2020-06-24'
    expect(dayjs(actualDateString).format('rr')).toBe('令和')
  })

  it('could use the complex format', () => {
    const actualDateString = '2020-06-24'
    expect(dayjs(actualDateString).format('YYYY(rrrr)')).toBe('2020(令和2)')
  })
})
