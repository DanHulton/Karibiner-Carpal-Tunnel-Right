import fs from 'fs-extra';
import base from './base';
import {
  addSpaceModifierKeys,
  addCapsLockModifierKeys,
  addTouchpadKeys
} from './add-keys';

let config = structuredClone(base);

config = addSpaceModifierKeys(config);
config = addCapsLockModifierKeys(config);
config = addTouchpadKeys(config);

fs.writeJsonSync('./dist/Carpal-Tunnel-Right.json', config, { spaces: 2 });
