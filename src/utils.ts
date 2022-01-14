export const getJpYear = (date: Date): string => {
  let result: string
  try {
    result = Intl.DateTimeFormat('ja-JP-u-ca-japanese', {
      year: '2-digit',
      era: 'long'
    }).format(date).slice(0, -1)
  } catch {
    result = '該当なし'
  }
  return result
}

export const getJpEra = (date: Date): string => {
  let result: string
  try {
    result = Intl.DateTimeFormat('ja-JP-u-ca-japanese', {
      era: 'long'
    }).format(date).slice(0, 2)
  } catch {
    result = '不明'
  }
  return result
}
