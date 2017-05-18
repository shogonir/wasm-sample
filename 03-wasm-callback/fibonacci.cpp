extern "C" {
    
    extern void consoleLogIntArray(int * pointer, int length);

    void fibonacciSeries(int n) {
        int * fibonacci = new int[n];
        int a=1, b=1, tmp;
        for (int i=0; i<n; ++i) {
            fibonacci[i] = a;
            tmp = a + b;
            a = b;
            b = tmp;
        }
        consoleLogIntArray(fibonacci, n);
        delete[] fibonacci;
    }
}

