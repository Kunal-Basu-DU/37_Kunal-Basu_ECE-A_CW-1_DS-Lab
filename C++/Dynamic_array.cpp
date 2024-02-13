#include <iostream>
using namespace std;

void output_array(int a[], int size) {
    cout << "Array elements: ";
    for (int i = 0; i < size; i++) {
        cout << a[i] << " ";
    }
    cout << endl;
}

void linear_search(int a[], int size) {
    int n;
    cout << "\nEnter n: ";
    cin >> n;

    int flag = 0; 
    for (int i = 0; i < size; i++) {
        if (a[i] == n) {
            cout << "Entered element " << a[i] << " found at index " << i << endl;
            flag = 1; 
        }
    }

    if (flag == 0) {
        cout << "Entered element " << n << " not found in the array" << endl;
    }
}

void reverse_array(int a[], int size) {
    int i = 0, j = size - 1;

    while (j > i) {
        int temp = a[i];
        a[i] = a[j];
        a[j] = temp;
        i++;
        j--;
    }

    cout << "Reversed array: ";
    output_array(a, size);
}

void update_array(int a[], int size) {
    cout << "Updated array: ";
    for (int i = 0; i < size; i++) {
        if (i % 2 == 0)
            a[i] *= 2;
        else
            a[i] += 5;
    }

    output_array(a, size);
}

void insert_element(int*& a, int& size) {
    int index, element;
    cout << "Enter index you want to insert element in: ";
    cin >> index;

    cout << "Enter element you want to insert: ";
    cin >> element;

    size++;
    int* tempArray = new int[size];

    for (int i = 0; i < index; i++) {
        tempArray[i] = a[i];
    }

    tempArray[index] = element;

    for (int i = index + 1; i < size; i++) {
        tempArray[i] = a[i - 1];
    }

    delete[] a;
    a = tempArray;

    cout << "Array after insertion:\n";
    output_array(a, size);
}

void delete_element(int*& a, int& size) {
    int index;
    cout << "Enter index to be deleted: ";
    cin >> index;

    if (index < 0 || index >= size) {
        cout << "Invalid index" << endl;
        return;
    }

    for (int i = index; i < size - 1; i++) {
        a[i] = a[i + 1];
    }

    size--;

    cout << "Array after deletion:\n";
    output_array(a, size);
}

int main() {
    int size;
    cout << "Enter size of array: ";
    cin >> size;

    int* a = new int[size];

    cout << "Enter elements in the array: ";
    for (int i = 0; i < size; i++) {
        cin >> a[i];
    }

    output_array(a, size);

    int choice;

    do {
        cout << "\nMenu:\n";
        cout << "1. Linear Search\n";
        cout << "2. Reverse Array\n";
        cout << "3. Update Array\n";
        cout << "4. Insert Element\n";
        cout << "5. Delete Element\n";
        cout << "6. Exit\n";

        cout << "Enter your choice: ";
        cin >> choice;

        switch (choice) {
            case 1:
                linear_search(a, size);
                break;
            case 2:
                reverse_array(a, size);
                break;
            case 3:
                update_array(a, size);
                break;
            case 4:
                insert_element(a, size);
                break;
            case 5:
                delete_element(a, size);
                break;
            case 6:
                cout << "Exiting program.\n";
                break;
            default:
                cout << "Invalid choice. Please enter a valid option.\n";
                break;
        }

    } while (choice != 6);

    delete[] a;

    return 0;
}
