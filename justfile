_default:
  @just --list --unsorted --justfile {{justfile()}}

compile:
  @npx tsx src/index.ts
