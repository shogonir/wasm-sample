emcc sum.cpp \
    -s WASM=1 \
    -s "MODULARIZE=1" \
    -s "EXPORTED_FUNCTIONS=['_IntSum', '_DoubleSum']" \
    -s "DEMANGLE_SUPPORT=1" \
    -o sum.js

