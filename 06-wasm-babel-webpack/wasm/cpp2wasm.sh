emcc add.cpp \
    -s WASM=1 \
    -s "MODULARIZE=1" \
    -s "EXPORTED_FUNCTIONS=['_add']" \
    -s "DEMANGLE_SUPPORT=1" \
    -o add.js && \
echo 'export default Module;' >> add.js

