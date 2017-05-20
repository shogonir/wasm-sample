#include "adder.cpp"

extern "C" {
    
    int add(int a, int b) {
        return Adder::add(a, b);
    }
}

