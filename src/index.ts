export * from './helpers/math'
import * as math from './helpers/math';

export const range = math.range

export default {
  ...math,
  range,
};

