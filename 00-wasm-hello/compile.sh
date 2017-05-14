docker run --rm -t -v $(pwd):/src gifnksm/emscripten-incoming emcc hello.c -s WASM=1 -o hello.html

