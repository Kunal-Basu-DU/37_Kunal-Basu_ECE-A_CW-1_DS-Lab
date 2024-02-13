import java.util.Scanner;

public class binary_search2 {
    
    static int binarySearch(int arr[], int low, int high, int n) {
        if (high >= low) {
            int mid = low + (high - low) / 2;

            if (arr[mid] == n) {
                return mid;
            }

            if (arr[mid] < n) {
                return binarySearch(arr, mid + 1, high, n);
            } else {
                return binarySearch(arr, low, mid - 1, n);
            }
        }

        return -1;
    }

    static void outputArray(int arr[], int size) {
        System.out.print("The elements entered in sorted array are: ");
        for (int i = 0; i < size; i++) {
            System.out.print(arr[i] + " ");
        }
        System.out.println();
    }

    public static void main(String args[]) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter size of array: ");
        int size = scanner.nextInt();

        int a[] = new int[size];

        System.out.print("Enter all elements of sorted array: ");
        for (int i = 0; i < size; i++) {
            a[i] = scanner.nextInt();
        }

        outputArray(a, size);

        System.out.print("Enter n: ");
        int n = scanner.nextInt();

        int result = binarySearch(a, 0, size - 1, n);

        if (result != -1) {
            System.out.println("Element " + n + " found at index " + result);
        } else {
            System.out.println("Element " + n + " not found in the array");
        }

        scanner.close();
    }
}
