const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function binarySearch(arr, n) {
    let low = 0;
    let high = arr.length - 1;

    while (high >= low) {
        let mid = Math.floor((high + low) / 2);

        if (arr[mid] === n) {
            return mid;
        }

        if (arr[mid] < n) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return -1;
}

function outputArray(arr) {
    console.log("The elements entered in sorted array are: " + arr.join(' '));
}

function main() {
    rl.question("Enter size of array: ", (size) => {
        size = parseInt(size);
        let a = [];

        console.log("Enter all elements of sorted array:");
        rl.on('line', (input) => {
            a.push(parseInt(input));

            if (a.length === size) {
                rl.close();
            }
        });

        rl.on('close', () => {
            outputArray(a);

            rl.question("Enter n: ", (n) => {
                n = parseInt(n);
                let result = binarySearch(a, n);

                if (result !== -1) {
                    console.log(`Element ${n} found at index ${result}`);
                } else {
                    console.log(`Element ${n} not found in the array`);
                }

                process.exit(0);
            });
        });
    });
}

main();
