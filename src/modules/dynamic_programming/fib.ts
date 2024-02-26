const fib = (n: number): number => {
    if (n < 1) {
        return 0;
    }
    else if (n === 1) {
        return 1;
    }
    return fib(n-1) +fib(n-2);
} 

// console.log(fib(10)) // -> 55

const tabulatedFib = (n: number): number => {
    const table = new Array(n+1);
    table.fill(0);
    table[1] = 1;

    for (let i = 2; i < table.length; i++) {
        const result = table[i-1] + table[i-2];
        table[i] = result;
    }

    return table[n];
}

console.log(tabulatedFib(50)); // 12586269025