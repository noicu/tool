export const moneyFormat = (num: number, decimal = 2, split = ',') => {
  if (isFinite(num)) { 
    if (num === 0) { 
      return num.toFixed(decimal)
    } else { 
      let res = ''
      const dotIndex = String(num).indexOf('.')
      if (dotIndex === -1) { 
        res = String(num).replace(/(\d)(?=(?:\d{3})+$)/g, `$1${split}`) + '.' + '0'.repeat(decimal)
      } else {
        const numStr = String((Math.round(num * Math.pow(10, decimal)) / Math.pow(10, decimal)).toFixed(decimal))
        const decimals = numStr.slice(dotIndex, dotIndex + decimal + 1)
        res = String(numStr.slice(0, dotIndex)).replace(/(\d)(?=(?:\d{3})+$)/g, `$1${split}`) + decimals
      }
      return res
    }
  } else {
    return '--'
  }
}
