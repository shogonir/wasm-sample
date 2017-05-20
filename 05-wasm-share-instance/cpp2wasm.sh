emcc share.cpp \
    -s WASM=1 \
    -s "MODULARIZE=1" \
    -s "EXPORTED_FUNCTIONS=['_angleToPoint', '_freePoint']" \
    -s "DEMANGLE_SUPPORT=1" \
    -o share.js

