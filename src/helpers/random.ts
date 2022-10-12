

export const random = (minNum?: number, maxNum?: number) => {
  if (maxNum !== (undefined && null)) {
    return Math.random() * (maxNum - (minNum || 0) + 1) + (minNum || 0)
  }
  if (minNum !== (undefined && null)) {
    return Math.random() * (minNum + 1)
  }

  return Math.random()
}

export const randomArr = <T>(n: Array<T>) => n[random(n.length - 1)]
