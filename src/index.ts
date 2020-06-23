import { PluginFunc } from 'dayjs'
import { getJpYear } from './utils'

export const jpFormat: PluginFunc = function(_o, c, _d) {
  const proto = c.prototype
  const oldFormat = proto.format

  proto.format = function(formatStr) {
    const str = formatStr || 'YYYY-MM-DDTHH:mm:ssZ'
    const result = str.replace(/\[([^\]]+)]|rrrr/g, (match) => {
      switch (match) {
        case 'rrrr':
          return getJpYear(this.toDate())
        default:
          return match
      }
    })
    return oldFormat.bind(this)(result)
  }
}
