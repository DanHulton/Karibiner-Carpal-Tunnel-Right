const mapping:Mapping = {
  "no_modifier": {
    // Return is more important than caps lock
    "caps_lock": "return_or_enter",

    // Delete is more important than tilde
    "grave_accent_and_tilde": "delete_or_backspace"
  },

  // For the most part, the keyboard is mirrored when space is held
  "primary_modifier": {
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
  "secondary_modifier": {
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
  "tertiary_modifier": {
    "w": "up_arrow",
    "a": "left_arrow",
    "s": "down_arrow",
    "d": "right_arrow",

    // But caps_lock and tilde are restored when secondary modifier is enabled
    "return_or_enter": "caps_lock",
    "delete_or_backspace": "grave_accent_and_tilde",
  }
};

export default mapping;
