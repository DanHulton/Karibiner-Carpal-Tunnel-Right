import mapping from './mapping';

// Variable names
const SPACE_MODIFIER = 'space_modifier';
const CAPS_LOCK_MODIFIER = 'caps_lock_modifier';
const MULTITOUCH_TOTAL = 'multitouch_extension_finger_count_total';
const MULTITOUCH_LOWER = 'multitouch_extension_finger_count_lower_half_area';

// Modifiers
const LEFT_SHIFT = 'left_shift';
const LEFT_COMMAND = 'left_command';
const CAPS_LOCK = 'caps_lock';

// Other magic strings
const VARIABLE_IF = 'variable_if';

const ALL_MODIFIERS = [
  [],
  [LEFT_SHIFT],
  [LEFT_COMMAND],
  [LEFT_SHIFT, LEFT_COMMAND],
  [CAPS_LOCK],
  [LEFT_SHIFT, CAPS_LOCK],
  [LEFT_COMMAND, CAPS_LOCK],
  [LEFT_SHIFT, LEFT_COMMAND, CAPS_LOCK],
];


/**
 * Add key mappings that aren't dependent on any modifiers or conditions.
 *
 * @param config - The config file to add to.
 */
export function addDirectMappingKeys(config: KaribinerConfig): KaribinerConfig {
  for (const [from, to] of Object.entries(mapping.space_modifier)) {
    config.rules[0].manipulators.push({
      type: 'basic',
      from: { key_code: from },
      to: [{ key_code: to }],
    });
  }

  return config;
}

/**
 * Add spacebar-based modifier keys to the config file.
 *
 * @param config - The config file to add to.
 */
export function addSpaceModifierKeys(config: KaribinerConfig): KaribinerConfig {
  for (const [from, to] of Object.entries(mapping.space_modifier)) {
    for (const modifiers of ALL_MODIFIERS) {
      config.rules[0].manipulators.push(
        buildManipulator(from, to, [SPACE_MODIFIER], modifiers),
      );
    }
  }

  return config;
}

/**
 * Add capslock-based modifier keys to the config file.
 *
 * @param config - The config file to add to.
 */
export function addCapsLockModifierKeys(config: KaribinerConfig): KaribinerConfig {
  for (const [from, to] of Object.entries(mapping.caps_lock_modifier)) {
    for (const modifiers of ALL_MODIFIERS) {
      config.rules[0].manipulators.push(
        buildManipulator(from, to, [CAPS_LOCK_MODIFIER], modifiers),
      );
    }
  }

  return config;
}

/**
 * Add touchpad-based modifier keys to the config file.
 *
 * @param config - The config file to add to.
 */
export function addTouchpadKeys(config: KaribinerConfig): KaribinerConfig {
  for (const [from, to] of Object.entries(mapping.touchpad_modifier)) {
    for (const modifiers of ALL_MODIFIERS) {
      config.rules[0].manipulators.push(
        buildManipulator(
          from,
          to,
          [MULTITOUCH_TOTAL, MULTITOUCH_LOWER],
          modifiers,
        ),
      );
    }
  }

  return config;
}

/**
 * Build a manipulator config value.
 *
 * @param from - The key to bind from.
 * @param to - The key to transform to.
 * @param variables - The variables that must be true for this mapping to be active.
 * @param modifiers - Any modifiers to set for the transformed key.
 */
function buildManipulator(
  from: string,
  to: string,
  variables: string[],
  modifiers: string[] = [],
): KaribinerManipulator {
  return {
    type: 'basic',
    from: { key_code: from, modifiers: { mandatory: modifiers } },
    to: [{ key_code: to, modifiers: modifiers }],
    conditions: variables.map(name => ({
      type: VARIABLE_IF,
      name: name,
      value: 1,
    })),
  };
}
