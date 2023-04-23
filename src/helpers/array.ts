/**
 * The function removes any duplicate elements from an array.
 * @param {T[]} arr - The parameter `arr` is an array of type `T`. The function `noRepeat` takes this
 * array as input and returns a new array that contains only the unique elements of the input array.
 * The type `T` can be any data type, such as string, number, or object.
 */
export const noRepeat = <T>(arr: T[]) => [...new Set(arr)]
