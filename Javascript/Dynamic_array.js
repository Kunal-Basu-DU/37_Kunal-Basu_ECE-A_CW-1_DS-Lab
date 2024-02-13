const readline = require('readline');

function outputArray(arr) {
    console.log("Array elements: " + arr.join(' '));
}

function linearSearch(arr) {
    const n = readlineSync.questionInt("\nEnter n: ");
    let found = false;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === n) {
            console.log(`Entered element ${arr[i]} found at index ${i}`);
            found = true;
        }
    }

    if (!found) {
        console.log(`Entered element ${n} not found in the array`);
    }
}

function reverseArray(arr) {
    for (let i = 0, j = arr.length - 1; j > i; i++, j--) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    console.log("Reversed array: " + arr.join(' '));
}

function updateArray(arr) {
    console.log("Updated array: " + arr.map((value, index) => (index % 2 === 0) ? value * 2 : value + 5).join(' '));
}

function insertElement(arr, index, element) {
    const newArray = [...arr.slice(0, index), element, ...arr.slice(index)];
    console.log("Array after insertion: " + newArray.join(' '));
    return newArray;
}

function deleteElement(arr, index) {
    const newArray = [...arr.slice(0, index), ...arr.slice(index + 1)];
    console.log("Array after deletion: " + newArray.join(' '));
    return newArray;
}

function main() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("Enter size of array: ", (size) => {
        let a = new Array(size);

        rl.question("Enter elements in the array (space-separated): ", (elements) => {
            a = elements.split(' ').map(Number);
            outputArray(a);

            let choice;

            const menu = () => {
                console.log("\nMenu:");
                console.log("1. Linear Search");
                console.log("2. Reverse Array");
                console.log("3. Update Array");
                console.log("4. Insert Element");
                console.log("5. Delete Element");
                console.log("6. Exit");
                rl.question("Enter your choice: ", (answer) => {
                    choice = parseInt(answer);

                    switch (choice) {
                        case 1:
                            linearSearch(a);
                            menu();
                            break;
                        case 2:
                            reverseArray(a);
                            menu();
                            break;
                        case 3:
                            updateArray(a);
                            menu();
                            break;
                        case 4:
                            rl.question("Enter index you want to insert element in: ", (index) => {
                                rl.question("Enter element you want to insert: ", (element) => {
                                    a = insertElement(a, parseInt(index), parseInt(element));
                                    menu();
                                });
                            });
                            break;
                        case 5:
                            rl.question("Enter index to be deleted: ", (delIndex) => {
                                a = deleteElement(a, parseInt(delIndex));
                                menu();
                            });
                            break;
                        case 6:
                            console.log("Exiting program.");
                            rl.close();
                            break;
                        default:
                            console.log("Invalid choice. Please enter a valid option.");
                            menu();
                            break;
                    }
                });
            };

            menu();
        });
    });
}

main();
