#!/bin/bash
emcc -Os -Wl,--no-entry "add.c" -o "add.wasm"
