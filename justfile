_default:
  @just --list --unsorted --justfile {{justfile()}}

compile:
  @npx tsx src/index.ts

install:
  @cp ./dist/Carpal-Tunnel-Right-Keyboard-Only.json ~/.config/karabiner/assets/complex_modifications
  @cp ./dist/Carpal-Tunnel-Right-Foot-Pedals.json ~/.config/karabiner/assets/complex_modifications

reinstall: compile install
