function Range(start, end) {
    return [...Array(end - start).keys()].map(i => i + start);
}

function printAsterisks(n) {
    for (const i of Range(1, n + 1)) {
        for (const j of Range(1, i + 1)) {
            process.stdout.write("*");
        }
        console.log(); // Add a newline after each row of asterisks
    }
}

// Example usage:
const n = 5;
printAsterisks(n);
