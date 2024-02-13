import java.util.Scanner;

public class binary_search_1 {

    public static int binarySearch(int[] arr, int size, int n) {
        int low = 0;
        int high = size - 1;
        int mid;

        while (high >= low) {
            mid = (high + low) / 2;

            if (arr[mid] == n) {
                return mid;
            }

            if (arr[mid] < n)
                low = mid + 1;
            else
                high = mid - 1;
        }

        return -1;
    }

    public static void outputArray(int[] arr, int size) {
        for (int i = 0; i < size; i++) {
            System.out.print(arr[i] + " ");
        }
        System.out.println();
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter size of array: ");
        int size = scanner.nextInt();

        int[] a = new int[size];

        System.out.print("Enter all elements of sorted array: ");
        for (int i = 0; i < size; i++) {
            a[i] = scanner.nextInt();
        }

        System.out.print("The elements entered in sorted array are: ");
        outputArray(a, size);

        System.out.print("Enter n: ");
        int n = scanner.nextInt();

        int result = binarySearch(a, size, n);

        if (result != -1)
            System.out.println("Element " + n + " found at index " + result);
        else
            System.out.println("Element " + n + " not found in the array");

        scanner.close();
    }
}
