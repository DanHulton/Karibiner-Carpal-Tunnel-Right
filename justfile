_default:
  @just --list --unsorted --justfile {{justfile()}}

compile:
  @npx tsx src/index.ts

install:
  @cp ./dist/Carpal-Tunnel-Right.json ~/.config/karabiner/assets/complex_modifications

reinstall: compile install
