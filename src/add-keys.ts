import mapping from './mapping';

// Variable names
const PRIMARY_MODIFIER = 'primary_modifier';
const SECONDARY_MODIFIER = 'secondary_modifier';
const TERTIARY_MODIFIER = 'tertiary_modifier';
const MULTITOUCH_TOTAL = 'multitouch_extension_finger_count_total';
const MULTITOUCH_LOWER = 'multitouch_extension_finger_count_lower_half_area';

export const KEYBOARD_TERTIARY_MODIFIERS = [
  MULTITOUCH_TOTAL,
  MULTITOUCH_LOWER,
];

export const PEDAL_TERTIARY_MODIFIERS = [
  TERTIARY_MODIFIER,
];

// Modifiers
const LEFT_SHIFT = 'left_shift';
const LEFT_COMMAND = 'left_command';
const CAPS_LOCK = 'caps_lock';

// Other magic strings
const VARIABLE_IF = 'variable_if';
const VARIABLE_UNLESS = 'variable_unless';

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
 * @param variables - The variables that must be false for this mapping to be active.
 */
export function addNoModifierKeys(
  config: KaribinerConfig,
  variables: string[],
): KaribinerConfig {
  for (const [from, to] of Object.entries(mapping.no_modifier)) {
    config.rules[0].manipulators.push({
      type: 'basic',
      from: { key_code: from },
      to: [{ key_code: to }],
      conditions: variables.map(name => ({
        type: VARIABLE_UNLESS,
        name: name,
        value: 1,
      })),
    });
  }

  return config;
}

/**
 * Add primary (spacebar-based) modifier keys to the config file.
 *
 * @param config - The config file to add to.
 */
export function addPrimaryModifierKeys(config: KaribinerConfig): KaribinerConfig {
  for (const [from, to] of Object.entries(mapping.primary_modifier)) {
    for (const modifiers of ALL_MODIFIERS) {
      config.rules[0].manipulators.push(
        buildManipulator(from, to, [PRIMARY_MODIFIER], modifiers),
      );
    }
  }

  return config;
}

/**
 * Add secondary (capslock-based) modifier keys to the config file.
 *
 * @param config - The config file to add to.
 */
export function addSecondaryModifierKeys(config: KaribinerConfig): KaribinerConfig {
  for (const [from, to] of Object.entries(mapping.secondary_modifier)) {
    for (const modifiers of ALL_MODIFIERS) {
      config.rules[0].manipulators.push(
        buildManipulator(from, to, [SECONDARY_MODIFIER], modifiers),
      );
    }
  }

  return config;
}

/**
 * Add tertiary modifier keys to the config file.
 *
 * @param config - The config file to add to.
 * @param variables - The variables that must be true for this mapping to be active.
 */
export function addTertiaryModifierKeys(
  config: KaribinerConfig,
  variables: string[]
): KaribinerConfig {
  for (const [from, to] of Object.entries(mapping.tertiary_modifier)) {
    for (const modifiers of ALL_MODIFIERS) {
      config.rules[0].manipulators.push(
        buildManipulator(
          from,
          to,
          variables,
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
