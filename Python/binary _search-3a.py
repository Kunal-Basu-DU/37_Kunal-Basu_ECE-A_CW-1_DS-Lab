def binary_search(arr, n):
    low, high = 0, len(arr) - 1

    while high >= low:
        mid = (high + low) // 2

        if arr[mid] == n:
            return mid

        if arr[mid] < n:
            low = mid + 1
        else:
            high = mid - 1

    return -1


def output_array(arr):
    print("The elements entered in sorted array are:", end=" ")
    for element in arr:
        print(element, end=" ")
    print()


def main():
    size = int(input("Enter size of array: "))
    a = []

    print("Enter all elements of sorted array:")
    for _ in range(size):
        a.append(int(input()))

    output_array(a)

    n = int(input("Enter n: "))
    result = binary_search(a, n)

    if result != -1:
        print(f"Element {n} found at index {result}")
    else:
        print(f"Element {n} not found in the array")


if __name__ == "__main__":
    main()
