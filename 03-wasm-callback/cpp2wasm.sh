emcc fibonacci.cpp \
    -s WASM=1 \
    -s "MODULARIZE=1" \
    -s "EXPORTED_FUNCTIONS=['_fibonacciSeries']" \
    --pre-js callbacks.js \
    -o fibonacci.js
