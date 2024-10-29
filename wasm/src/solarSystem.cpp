#include <emscripten/emscripten.h>

extern "C" {
    EMSCRIPTEN_KEEPALIVE
    int add(int a, int b) {  // Added export keyword
        return a + b;
    }
}
