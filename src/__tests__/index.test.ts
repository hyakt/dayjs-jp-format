import { jpFormat } from '../'
import * as dayjs from 'dayjs'

describe('index', () => {
  dayjs.extend(jpFormat)

  it('could convert the year correctly', () => {
    const actualDateString = '2020-06-24'
    expect(dayjs(actualDateString).format('rrrr')).toContain('令和')
  })
})
