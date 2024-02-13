def output_array(arr):
    print("Array elements:", ' '.join(map(str, arr)))

def linear_search(arr):
    n = int(input("\nEnter n: "))
    found = False

    for i, value in enumerate(arr):
        if value == n:
            print(f"Entered element {value} found at index {i}")
            found = True

    if not found:
        print(f"Entered element {n} not found in the array")

def reverse_array(arr):
    arr.reverse()
    print("Reversed array:", ' '.join(map(str, arr)))

def update_array(arr):
    updated_arr = [(value * 2) if (index % 2 == 0) else (value + 5) for index, value in enumerate(arr)]
    print("Updated array:", ' '.join(map(str, updated_arr)))

def insert_element(arr):
    index = int(input("Enter index you want to insert element in: "))
    element = int(input("Enter element you want to insert: "))
    arr.insert(index, element)
    print("Array after insertion:", ' '.join(map(str, arr)))

def delete_element(arr):
    index = int(input("Enter index to be deleted: "))
    if 0 <= index < len(arr):
        del arr[index]
        print("Array after deletion:", ' '.join(map(str, arr)))
    else:
        print("Invalid index")

def main():
    size = int(input("Enter size of array: "))
    a = list(map(int, input("Enter elements in the array (space-separated): ").split()))

    output_array(a)

    choice = 0

    while choice != 6:
        print("\nMenu:")
        print("1. Linear Search")
        print("2. Reverse Array")
        print("3. Update Array")
        print("4. Insert Element")
        print("5. Delete Element")
        print("6. Exit")

        choice = int(input("Enter your choice: "))

        if choice == 1:
            linear_search(a)
        elif choice == 2:
            reverse_array(a)
        elif choice == 3:
            update_array(a)
        elif choice == 4:
            insert_element(a)
        elif choice == 5:
            delete_element(a)
        elif choice == 6:
            print("Exiting program.")
        else:
            print("Invalid choice. Please enter a valid option.")

if __name__ == "__main__":
    main()
