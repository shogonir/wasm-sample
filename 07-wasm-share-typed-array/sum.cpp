extern "C"
{

    double DoubleSum(double * doubleArray, int size) {
        double sum = 0;
        for (int i=0; i<size; ++i) {
            sum += doubleArray[i];
        }
        return sum;
    }

    int IntSum(int * intArray, int size) {
        int sum = 0;
        for (int i=0; i<size; ++i) {
            sum += intArray[i];
        }
        return sum;
    }
}
