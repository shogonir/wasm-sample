emcc hello.c \
    -s WASM=1 \
    -s "MODULARIZE=1" \
    -o hello.js
