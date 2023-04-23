
/**
 * The function encodes a string using URI encoding and then encodes it in base64 format.
 * @param {string} str - The input string that needs to be encoded.
 * @returns a base64 encoded string of the input `str`.
 */
export function encode(str: string) {
  const encode = encodeURI(str);
  const base64 = btoa(encode);
  return base64;
}

/**
 * This function decodes a base64 string.
 * @param {string} base64 - The `base64` parameter is a string that represents data encoded in base64
 * format. Base64 is a way of encoding binary data in ASCII text format, which is useful for
 * transmitting data over networks or storing data in text-based formats. The `decode` function likely
 * takes this base64-encoded data
 */
export function decode(base64: string) {
  const decode = atob(base64);
  const str = decodeURI(decode);
  return str;
}
