extern "C"
{

void InsertSort(int * array, int length)
{
    int j, swap;
    for (int i=1; i<length; i++) {
        j = i - 1;
        while (j >= 0 && array[j] > array[j+1]) {
            swap = array[j];
            array[j] = array[j+1];
            array[j+1] = swap;
            --j;
        }
    }
}

}
