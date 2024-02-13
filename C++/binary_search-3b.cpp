#include <iostream>

int binary_search(int arr[], int low, int high, int n) {
    if (high >= low) {
        int mid = low + (high - low) / 2;

        if (arr[mid] == n) {
            return mid;
        }

        if (arr[mid] < n) {
            return binary_search(arr, mid + 1, high, n);
        } else {
            return binary_search(arr, low, mid - 1, n);
        }
    }

    return -1;
}

void output_array(int arr[], int size) {
    for (int i = 0; i < size; i++) {
        std::cout << arr[i] << " ";
    }
    std::cout << std::endl;
}

int main() {
    int size;
    std::cout << "Enter size of array: ";
    std::cin >> size;

    int a[size];
    std::cout << "Enter all elements of sorted array: ";
    for (int i = 0; i < size; i++) {
        std::cin >> a[i];
    }

    std::cout << "The elements entered in sorted array are: ";
    output_array(a, size);

    int n;
    std::cout << "Enter n: ";
    std::cin >> n;

    int result = binary_search(a, 0, size - 1, n);

    if (result != -1) {
        std::cout << "Element " << n << " found at index " << result << std::endl;
    } else {
        std::cout << "Element " << n << " not found in the array" << std::endl;
    }

    return 0;
}
