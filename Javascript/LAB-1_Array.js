const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function outputArray(arr) {
    console.log("Array elements: " + arr.join(" "));
}

function linearSearch(arr, n) {
    let flag = false;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === n) {
            console.log("Entered element " + arr[i] + " found at index " + i);
            flag = true;
        }
    }

    if (!flag) {
        console.log("Entered element " + n + " not found in the array");
    }
}

function reverseArray(arr) {
    let i = 0, j = arr.length - 1;

    while (j > i) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;
    }

    console.log("Reversed array: " + arr.join(" "));
}

function updateArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = (i % 2 === 0) ? arr[i] * 2 : arr[i] + 5;
    }

    console.log("Updated array: " + arr.join(" "));
}

function insertElement(arr) {
    rl.question("Enter index you want to insert element in: ", index => {
        rl.question("Enter element you want to insert: ", element => {
            arr.splice(index, 0, element);

            console.log("Array after insertion:");
            outputArray(arr);
            rl.close();
        });
    });
}

function deleteElement(arr) {
    rl.question("Enter index to be deleted: ", index => {
        if (index >= 0 && index < arr.length) {
            arr.splice(index, 1);

            console.log("Array after deletion:");
            outputArray(arr);
        } else {
            console.log("Invalid index");
        }

        rl.close();
    });
}

function main() {
    rl.question("Enter size of array: ", size => {
        let arr = [];

        console.log("Enter elements in the array:");
        let counter = 0;

        let inputHandler = (element) => {
            arr.push(element);
            counter++;

            if (counter < size) {
                rl.question("", inputHandler);
            } else {
                rl.close();
                outputArray(arr);
                executeMenu(arr);
            }
        };

        rl.question("", inputHandler);
    });
}

function executeMenu(arr) {
    rl.question("\nMenu:\n1. Linear Search\n2. Reverse Array\n3. Update Array\n4. Insert Element\n5. Delete Element\n6. Exit\nEnter your choice: ", choice => {
        switch (parseInt(choice)) {
            case 1:
                rl.question("Enter n: ", n => {
                    linearSearch(arr, parseInt(n));
                    executeMenu(arr);
                });
                break;
            case 2:
                reverseArray(arr);
                executeMenu(arr);
                break;
            case 3:
                updateArray(arr);
                executeMenu(arr);
                break;
            case 4:
                insertElement(arr);
                break;
            case 5:
                deleteElement(arr);
                break;
            case 6:
                console.log("Exiting program.");
                rl.close();
                break;
            default:
                console.log("Invalid choice. Please enter a valid option.");
                executeMenu(arr);
                break;
        }
    });
}

main();
