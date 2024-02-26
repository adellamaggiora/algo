// howSum memoized

const howSum = (targetSum: number, numbers: number[], memo = {}): number[] => {
    if (targetSum in memo) {
        return memo[targetSum];
    }
    if (targetSum === 0) {
        return [];
    }
    else if (targetSum < 0) {
        return null;
    }
    
    for (let n of numbers) {
        const result = howSum(targetSum - n, numbers);
        if (result !== null) {
            memo[targetSum] = [...result, n] 
            return memo[targetSum];
        }
    }

    return null;
}


console.log(howSum(15, [3, 5])) // [ 3, 3, 3, 3, 3 ]
console.log(howSum(7, [5, 4, 3, 7])) // [ 3, 4 ]