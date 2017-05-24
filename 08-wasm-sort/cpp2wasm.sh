emcc sort.cpp \
    -s WASM=1 \
    -s "MODULARIZE=1" \
    -s "EXPORTED_FUNCTIONS=['_InsertSort']" \
    -s "DEMANGLE_SUPPORT=1" \
    -o sort.js

