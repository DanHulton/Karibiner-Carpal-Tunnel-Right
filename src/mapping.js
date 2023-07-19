export default {
  // For the most part, the keyboard is mirrored when space is held
  "space-modifier": {
    // Delete is very important, so it is mapped to the easy-to-reach tilde
    "grave_accent_and_tilde": "delete_or_backspace",

    // Return, also very important, mapped to caps lock
    "caps_lock": "return_or_enter",

    "1": "0",
    "2": "9",
    "3": "8",
    "4": "7",
    "5": "6",

    "q": "p",
    "w": "o",
    "e": "i",
    "r": "u",
    "t": "y",

    "a": "semicolon",
    "s": "l",
    "d": "k",
    "f": "j",
    "g": "h",

    "z": "period",
    "x": "comma",
    "c": "m",
    "v": "n",
  },

  // Punctuation characters, specifically, are mirrored when holding caps lock
  "caps-lock-modifier": {
    "1": "equal_sign",
    "2": "hyphen",

    "q": "backslash",
    "w": "close_bracket",
    "e": "open_bracket",

    "a": "quote",
    "s": "semicolon",

    "z": "slash",
    "x": "period",
    "c": "comma",
  },

  // And we need arrow keys, and need to be able to press Command and Shift
  // with them, for editing, so we "hold" the touchpad with our palm
  "touchpad-modifier": {
    "w": "up_arrow",
    "a": "left_arrow",
    "s": "down_arrow",
    "d": "right_arrow",
  }
};
