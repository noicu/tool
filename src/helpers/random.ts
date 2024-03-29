import { isNumber } from "@noicu/is";

export const random = (minNum?: number, maxNum?: number) => {
  if (maxNum !== (undefined && null)) {
    return Math.floor(Math.random() * (maxNum - (minNum || 0) + 1) + (minNum || 0))
  }
  if (minNum !== (undefined && null)) {
    return Math.floor(Math.random() * (minNum + 1))
  }

  return Math.random()
}

export const randoms = (length: number, minNum?: number, maxNum?: number) => {
  const r = []
  for (let i = 0; i < length; i++) {
    r.push(random(minNum, maxNum))
  }
  return r
}

export const randomArr = <T>(n: Array<T>) => n[random(n.length - 1)]

export const randomDisrupt = (n: number | string, length?: number) => {
  let str: string
  const isNum = isNumber(n)

  if (isNum) {
    str = n.toString()
  } else {
    str = n
  }

  const newStrAll: string[] = [];

  str.split('').forEach((item, index, array) => {
    const newIndex = random(newStrAll.length);
    newStrAll.splice(newIndex, 0, item);
  });

  const ret = length ? newStrAll.join('').slice(0, length) : newStrAll.join('')

  return isNum ? Number(ret) : ret
}

// function randomColor(r?: number, g?: number, b?: number, a?: number) {
//   const rn = isNumber(r).min(0).max(255) ? r : Math.floor(Math.random() * 255)
//   const gn = isNumber(r).min(0).max(255) ? g : Math.floor(Math.random() * 255)
//   const bn = isNumber(r).min(0).max(255) ? b : Math.floor(Math.random() * 255)
//   const an = isNumber(r).min(0).max(1) ? a : Math.random()
//   const color = `rgba(${rn},${gn},${bn},${an})`

//   return color
// }

// Number(123).toPrecision(2)
// Number(123)
