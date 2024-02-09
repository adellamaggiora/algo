const fib = (n: number) => {
    if (n <= 1) {
        return 1;
    }
    return fib(n-1) + fib(n-2);
}

// console.log(fib(12))

const fibUpDown = (n: number, memo = {}) => {
    if (n in memo) {
        return memo[n];
    }
    if (n <= 1) {
        return 1;
    }
    memo[n] = fibUpDown(n-1, memo) + fibUpDown(n-2, memo);
    return memo[n];
}

// console.log(fibBottomDown(50))

const fibBottomUp = (n: number) => {
    const arr = new Array(n)?.fill(1);

    for (let i = 2; i < arr.length; i++) {
        arr[i] = arr[i-1] + arr[i-2];        
    }

    return arr[n-1];
}

console.log(fibBottomUp(10));