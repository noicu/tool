/**
 * This is a TypeScript function that maps a number from one range to another range.
 * @param {number} number - The input number that needs to be mapped to a new range.
 * @param {number} inMin - inMin is the minimum value of the input range. It is the lower bound of the
 * range of values that the "number" parameter can take.
 * @param {number} inMax - inMax is a parameter representing the maximum value of the input range. It
 * is used in the calculation to scale the input value to the desired output range.
 * @param {number} outMin - The parameter `outMin` represents the minimum value of the desired output
 * range. It is the value that the input value `inMin` will be mapped to.
 * @param {number} outMax - The parameter "outMax" represents the maximum value of the output range. It
 * is the highest value that the input number can be mapped to in the output range.
 */
export const range = (number: number, inMin: number, inMax: number, outMin: number, outMax: number) => (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin
