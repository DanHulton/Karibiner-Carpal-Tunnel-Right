import fs from 'fs-extra';
import baseKeyboardOnly from './base-keyboard-only';
import baseFootPedals from './base-foot-pedals';
import {
  addNoModifierKeys,
  addPrimaryModifierKeys,
  addSecondaryModifierKeys,
  addTertiaryModifierKeys,
  KEYBOARD_TERTIARY_MODIFIERS,
  PEDAL_TERTIARY_MODIFIERS,
} from './add-keys';

// Create keyboard-only config file

let configKeyboardOnly = structuredClone(baseKeyboardOnly);

configKeyboardOnly = addNoModifierKeys(configKeyboardOnly, KEYBOARD_TERTIARY_MODIFIERS);
configKeyboardOnly = addPrimaryModifierKeys(configKeyboardOnly);
configKeyboardOnly = addSecondaryModifierKeys(configKeyboardOnly);
configKeyboardOnly = addTertiaryModifierKeys(configKeyboardOnly, KEYBOARD_TERTIARY_MODIFIERS);

fs.writeJsonSync('./dist/Carpal-Tunnel-Right-Keyboard-Only.json', configKeyboardOnly, { spaces: 2 });

// Create foot pedal-based config file

let configFootPedals = structuredClone(baseFootPedals);

configFootPedals = addNoModifierKeys(configFootPedals, PEDAL_TERTIARY_MODIFIERS);
configFootPedals = addPrimaryModifierKeys(configFootPedals);
configFootPedals = addSecondaryModifierKeys(configFootPedals);
configFootPedals = addTertiaryModifierKeys(configFootPedals, PEDAL_TERTIARY_MODIFIERS);

fs.writeJsonSync('./dist/Carpal-Tunnel-Right-Foot-Pedals.json', configFootPedals, { spaces: 2 });
