export class Key<K, C, N>{

  constructor(readonly key: K[] | K, readonly code: C, readonly keyCode: N) {

  }

  /**
   * The function returns true if the key object matches the key, code, or keyCode value.
   * @param {any} key - The parameter `key` is a key, code, or keyCode value.
   * @returns true if the key object matches the key, code, or keyCode value.
   */
  match(key: any): boolean {
    if (key.constructor === Key) return this === key || this.key === key.key || this.code === key.code || this.keyCode === key.keyCode
    if (typeof this.key === 'string') {
      if (this.key.toLowerCase() === key.toLowerCase()) return true
    }
    if (Array.isArray(this.key)) {
      if (this.key.includes(key)) return true
    }
    return this.key === key || this.code === key || this.keyCode === key
  }

  /**
   * The function returns the key value of the key object.
   * @returns The key value of the key object.
   */
  getKey() {
    return this.key
  }

  /**
   * The function returns the code value of the key object.
   * @returns The code value of the key object.
   */
  getCode() {
    return this.code
  }

  /**
   * The function returns the keyCode value of the key object.
   * @returns The keyCode value of the key object.
   */
  getKeyCode() {
    return this.keyCode
  }

  /**
   * The function returns the key object as a string.
   * @returns The key object as a string.
   */
  toString() {
    return `Key: ${this.key}, Code: ${this.code}, KeyCode: ${this.keyCode}`
  }

  /**
   * The function returns the key object as a JSON object.
   * @returns The key object as a JSON object.
   */
  toJSON() {
    return {
      key: this.key,
      code: this.code,
      keyCode: this.keyCode
    }
  }

  /**
   * The function returns the key object as an array.
   * @returns The key object as an array.
   */
  toArray() {
    return [this.key, this.code, this.keyCode]
  }

  /**
   * The function returns the key object as a tuple.
   * @returns The key object as a tuple.
   */
  toTuple() {
    return [this.key, this.code, this.keyCode] as const
  }

  /**
   * The function returns the key object as a map. 
   * @returns The key object as a map.
   */
  toMap() {
    return new Map(Object.entries(this.toJSON()))
  }

  /**
   * The function returns the key object as a set.
   * @returns The key object as a set.
   */
  toSet() {
    return new Set(this.toArray())
  }
}

// key, code, keyCode values from https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values
/**
 * The `KEYBOARD` object contains key, code, and keyCode values for the keys on a standard US keyboard.
 * The `KEYBOARD` object is used by the `Keyboard` class.
 * @example
 * // The following code creates a new `Keyboard` object and adds a keydown event listener.
 * // When the user presses the 'a' key, the `Keyboard` object will log the key, code, and keyCode
 * // values to the console.
 * const keyboard = new Keyboard()
 * keyboard.on('keydown', (event) => {
 *  if (event.key.match(KEYBOARD.A)) {
 *   console.log(event.key.toString())
 * }
 */
export const KEYBOARD = {
  A:new Key(['a', 'A'], 'KeyA', 65) as Key<'a' | 'A', 'KeyA', 65>,
  B:new Key(['b', 'B'], 'KeyB', 66) as Key<'b' | 'B', 'KeyB', 66>,
  C:new Key(['c', 'C'], 'KeyC', 67) as Key<'c' | 'C', 'KeyC', 67>,
  D:new Key(['d', 'D'], 'KeyD', 68) as Key<'d' | 'D', 'KeyD', 68>,
  E:new Key(['e', 'E'], 'KeyE', 69) as Key<'e' | 'E', 'KeyE', 69>,
  F:new Key(['f', 'F'], 'KeyF', 70) as Key<'f' | 'F', 'KeyF', 70>,
  G:new Key(['g', 'G'], 'KeyG', 71) as Key<'g' | 'G', 'KeyG', 71>,
  H:new Key(['h', 'H'], 'KeyH', 72) as Key<'h' | 'H', 'KeyH', 72>,
  I:new Key(['i', 'I'], 'KeyI', 73) as Key<'i' | 'I', 'KeyI', 73>,
  J:new Key(['j', 'J'], 'KeyJ', 74) as Key<'j' | 'J', 'KeyJ', 74>,
  K:new Key(['k', 'K'], 'KeyK', 75) as Key<'k' | 'K', 'KeyK', 75>,
  L:new Key(['l', 'L'], 'KeyL', 76) as Key<'l' | 'L', 'KeyL', 76>,
  M:new Key(['m', 'M'], 'KeyM', 77) as Key<'m' | 'M', 'KeyM', 77>,
  N:new Key(['n', 'N'], 'KeyN', 78) as Key<'n' | 'N', 'KeyN', 78>,
  O:new Key(['o', 'O'], 'KeyO', 79) as Key<'o' | 'O', 'KeyO', 79>,
  P:new Key(['p', 'P'], 'KeyP', 80) as Key<'p' | 'P', 'KeyP', 80>,
  Q:new Key(['q', 'Q'], 'KeyQ', 81) as Key<'q' | 'Q', 'KeyQ', 81>,
  R:new Key(['r', 'R'], 'KeyR', 82) as Key<'r' | 'R', 'KeyR', 82>,
  S:new Key(['s', 'S'], 'KeyS', 83) as Key<'s' | 'S', 'KeyS', 83>,
  T:new Key(['t', 'T'], 'KeyT', 84) as Key<'t' | 'T', 'KeyT', 84>,
  U:new Key(['u', 'U'], 'KeyU', 85) as Key<'u' | 'U', 'KeyU', 85>,
  V:new Key(['v', 'V'], 'KeyV', 86) as Key<'v' | 'V', 'KeyV', 86>,
  W:new Key(['w', 'W'], 'KeyW', 87) as Key<'w' | 'W', 'KeyW', 87> ,
  X:new Key(['x', 'X'], 'KeyX', 88) as Key<'x' | 'X', 'KeyX', 88>,
  Y:new Key(['y', 'Y'], 'KeyY', 89) as Key<'y' | 'Y', 'KeyY', 89>,
  Z:new Key(['z', 'Z'], 'KeyZ', 90) as Key<'z' | 'Z', 'KeyZ', 90>,
  ZERO:new Key(['0', ')'], 'Digit0', 48) as Key<'0' | ')', 'Digit0', 48>,
  ONE:new Key(['1', '!'], 'Digit1', 49) as Key<'1' | '!', 'Digit1', 49>,
  TWO:new Key(['2', '@'], 'Digit2', 50) as Key<'2' | '@', 'Digit2', 50>,
  THREE:new Key(['3', '#'], 'Digit3', 51) as Key<'3' | '#', 'Digit3', 51>,
  FOUR:new Key(['4', '$'], 'Digit4', 52) as Key<'4' | '$', 'Digit4', 52>,
  FIVE:new Key(['5', '%'], 'Digit5', 53) as Key<'5' | '%', 'Digit5', 53>,
  SIX:new Key(['6', '^'], 'Digit6', 54) as Key<'6' | '^', 'Digit6', 54>,
  SEVEN:new Key(['7', '&'], 'Digit7', 55) as Key<'7' | '&', 'Digit7', 55>,
  EIGHT:new Key(['8', '*'], 'Digit8', 56) as Key<'8' | '*', 'Digit8', 56>,
  NINE:new Key(['9', '('], 'Digit9', 57) as Key<'9' | '(', 'Digit9', 57>,
  NUMPAD_ZERO:new Key('0', 'Numpad0', 96) as Key<'0', 'Numpad0', 96>,
  NUMPAD_ONE:new Key('1', 'Numpad1', 97) as Key<'1', 'Numpad1', 97>,
  NUMPAD_TWO:new Key('2', 'Numpad2', 98) as Key<'2', 'Numpad2', 98>,
  NUMPAD_THREE:new Key('3', 'Numpad3', 99) as Key<'3', 'Numpad3', 99>,
  NUMPAD_FOUR:new Key('4', 'Numpad4', 100) as Key<'4', 'Numpad4', 100>,
  NUMPAD_FIVE:new Key('5', 'Numpad5', 101) as Key<'5', 'Numpad5', 101>,
  NUMPAD_SIX:new Key('6', 'Numpad6', 102) as Key<'6', 'Numpad6', 102>,
  NUMPAD_SEVEN:new Key('7', 'Numpad7', 103) as Key<'7', 'Numpad7', 103>,
  NUMPAD_EIGHT:new Key('8', 'Numpad8', 104) as Key<'8', 'Numpad8', 104>,
  NUMPAD_NINE:new Key('9', 'Numpad9', 105) as Key<'9', 'Numpad9', 105>,
  NUMPAD_MULTIPLY:new Key('*', 'NumpadMultiply', 106) as Key<'*', 'NumpadMultiply', 106>,
  NUMPAD_ADD:new Key('+', 'NumpadAdd', 107) as Key<'+', 'NumpadAdd', 107>,
  NUMPAD_SUBTRACT:new Key('-', 'NumpadSubtract', 109) as Key<'-', 'NumpadSubtract', 109>,
  NUMPAD_DECIMAL:new Key('.', 'NumpadDecimal', 110) as Key<'.', 'NumpadDecimal', 110>,
  NUMPAD_DIVIDE:new Key('/', 'NumpadDivide', 111) as Key<'/', 'NumpadDivide', 111>,
  F1:new Key('F1', 'F1', 112) as Key<'F1', 'F1', 112>,
  F2:new Key('F2', 'F2', 113) as Key<'F2', 'F2', 113>,
  F3:new Key('F3', 'F3', 114) as Key<'F3', 'F3', 114>,
  F4:new Key('F4', 'F4', 115) as Key<'F4', 'F4', 115>,
  F5:new Key('F5', 'F5', 116) as Key<'F5', 'F5', 116>,
  F6:new Key('F6', 'F6', 117) as Key<'F6', 'F6', 117>,
  F7:new Key('F7', 'F7', 118) as Key<'F7', 'F7', 118>,
  F8:new Key('F8', 'F8', 119) as Key<'F8', 'F8', 119>,
  F9:new Key('F9', 'F9', 120) as Key<'F9', 'F9', 120>,
  F10:new Key('F10', 'F10', 121) as Key<'F10', 'F10', 121>,
  F11:new Key('F11', 'F11', 122) as Key<'F11', 'F11', 122>,
  F12:new Key('F12', 'F12', 123) as Key<'F12', 'F12', 123>,
  NUM_LOCK:new Key('NumLock', 'NumLock', 144) as Key<'NumLock', 'NumLock', 144>,
  SCROLL_LOCK:new Key('ScrollLock', 'ScrollLock', 145) as Key<'ScrollLock', 'ScrollLock', 145>,
  SEMICOLON:new Key([';', ':'], 'Semicolon', 186) as Key<';' | ':', 'Semicolon', 186>,
  EQUALS:new Key(['=', '+'], 'Equal', 187) as Key<'=' | '+', 'Equal', 187>,
  COMMA:new Key([',', '<'], 'Comma', 188) as Key<',' | '<', 'Comma', 188>,
  DASH:new Key(['-', '_'], 'Minus', 189) as Key<'-' | '_', 'Minus', 189>,
  PERIOD:new Key(['.', '>'], 'Period', 190) as Key<'.' | '>', 'Period', 190>,
  FORWARD_SLASH:new Key(['/', '?'], 'Slash', 191) as Key<'/' | '?', 'Slash', 191>,
  GRAVE_ACCENT:new Key(['`', '~'], 'Backquote', 192) as Key<'`' | '~', 'Backquote', 192>,
  OPEN_BRACKET:new Key(['[', '{'], 'BracketLeft', 219) as Key<'[' | '{', 'BracketLeft', 219>,
  BACK_SLASH:new Key(['\\', '|'], 'Backslash', 220) as Key<'\\' | '|', 'Backslash', 220>,
  CLOSE_BRACKET:new Key([']', '}'], 'BracketRight', 221) as Key<']' | '}', 'BracketRight', 221>,
  SINGLE_QUOTE:new Key(["'", '"'], 'Quote', 222) as Key<'"' | "'", 'Quote', 222>,
  FN:new Key('Fn', 'Fn', 255) as Key<'Fn', 'Fn', 255>,
  SHIFT:new Key('Shift', 'Shift', 16) as Key<'Shift', 'Shift', 16>,
  CONTROL:new Key('Control', 'Control', 17)  as Key<'Control', 'Control', 17>,
  ALT:new Key('Alt', 'Alt', 18) as Key<'Alt', 'Alt', 18>,
  ENTER:new Key('Enter', 'Enter', 13) as Key<'Enter', 'Enter', 13>,
  BACKSPACE:new Key('Backspace', 'Backspace', 8) as Key<'Backspace', 'Backspace', 8>,
  TAB:new Key('Tab', 'Tab', 9) as Key<'Tab', 'Tab', 9>,
  PAUSE:new Key('Pause', 'Pause', 19) as Key<'Pause', 'Pause', 19>,
  CAPS_LOCK:new Key('CapsLock', 'CapsLock', 20) as Key<'CapsLock', 'CapsLock', 20>,
  ESCAPE:new Key('Escape', 'Escape', 27) as Key<'Escape', 'Escape', 27>,
  SPACE:new Key('Space', 'Space', 32) as Key<'Space', 'Space', 32>,
  PAGE_UP:new Key('PageUp', 'PageUp', 33) as Key<'PageUp', 'PageUp', 33>,
  PAGE_DOWN:new Key('PageDown', 'PageDown', 34) as Key<'PageDown', 'PageDown', 34>,
  END:new Key('End', 'End', 35) as Key<'End', 'End', 35>,
  HOME:new Key('Home', 'Home', 36) as Key<'Home', 'Home', 36>,
  LEFT_ARROW:new Key('LeftArrow', 'ArrowLeft', 37) as Key<'LeftArrow', 'ArrowLeft', 37>,
  UP_ARROW:new Key('UpArrow', 'ArrowUp', 38) as Key<'UpArrow', 'ArrowUp', 38>,
  RIGHT_ARROW:new Key('RightArrow', 'ArrowRight', 39) as Key<'RightArrow', 'ArrowRight', 39>,
  DOWN_ARROW:new Key('DownArrow', 'ArrowDown', 40) as Key<'DownArrow', 'ArrowDown', 40>,
  INSERT:new Key('Insert', 'Insert', 45) as Key<'Insert', 'Insert', 45>,
  DELETE:new Key('Delete', 'Delete', 46) as Key<'Delete', 'Delete', 46>,
  // modifier keys
  LEFT_META:new Key('LeftMeta', 'Meta', 91) as Key<'LeftMeta', 'Meta', 91>,
  RIGHT_META:new Key('RightMeta', 'Meta', 93) as Key<'RightMeta', 'Meta', 93>,
  LEFT_SHIFT:new Key('LeftShift', 'Shift', 16) as Key<'LeftShift', 'Shift', 16>,
  RIGHT_SHIFT:new Key('RightShift', 'Shift', 16) as Key<'RightShift', 'Shift', 16>,
  LEFT_CONTROL:new Key('LeftControl', 'Control', 17) as Key<'LeftControl', 'Control', 17>,
  RIGHT_CONTROL:new Key('RightControl', 'Control', 17) as Key<'RightControl', 'Control', 17>,
  LEFT_ALT:new Key('LeftAlt', 'Alt', 18) as Key<'LeftAlt', 'Alt', 18>,
  RIGHT_ALT:new Key('RightAlt', 'Alt', 18) as Key<'RightAlt', 'Alt', 18>,
  // mac
  META:new Key('Meta', 'Meta', 224) as Key<'Meta', 'Meta', 224>,
  COMMAND:new Key('Command', 'Meta', 91) as Key<'Command', 'Meta', 91>,
  OPTION:new Key('Option', 'Alt', 18) as Key<'Option', 'Alt', 18>,
  MAC_WK_CMD_LEFT:new Key('MacWkCmdLeft', 'Meta', 91) as Key<'MacWkCmdLeft', 'Meta', 91>,
  MAC_WK_CMD_RIGHT:new Key('MacWkCmdRight', 'Meta', 93) as Key<'MacWkCmdRight', 'Meta', 93>,
  // windows
  WINDOWS:new Key('Windows', 'OS', 91) as Key<'Windows', 'OS', 91>,
  // linux
  CONTEXT_MENU:new Key('ContextMenu', 'ContextMenu', 93) as Key<'ContextMenu', 'ContextMenu', 93>,
  // android
  SEARCH:new Key('Search', 'Search', 227) as Key<'Search', 'Search', 227>,
}

