/**
 * The moneyFormat function formats a number as a currency string with a specified number of decimal
 * places and a specified separator for thousands.
 * @param {number} num - The number that needs to be formatted as a money value.
 * @param [decimal=2] - The number of decimal places to include in the formatted number. The default
 * value is 2.
 * @param [split=,] - The `split` parameter is a string that specifies the character used to separate
 * groups of thousands in the formatted number. By default, it is set to a comma (',').
 * @returns The `moneyFormat` function returns a formatted string representation of a number with a
 * specified number of decimal places and a specified separator for thousands. If the input number is
 * not a finite number, it returns a string '--'.
 */
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
