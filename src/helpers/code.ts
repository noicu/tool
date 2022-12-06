//字符串转base64
export function encode(str: string) {
  // 对字符串进行编码
  const encode = encodeURI(str);
  // 对编码的字符串转化base64
  const base64 = btoa(encode);
  return base64;
}

// base64转字符串
export function decode(base64: string) {
  // 对base64转编码
  const decode = atob(base64);
  // 编码转字符串
  const str = decodeURI(decode);
  return str;
}
