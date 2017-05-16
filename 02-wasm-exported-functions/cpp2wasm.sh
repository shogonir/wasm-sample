emcc add.c \
    -s WASM=1 \
    -s "MODULARIZE=1" \
    -s "EXPORTED_FUNCTIONS=['_add']" \
    -o add.js
