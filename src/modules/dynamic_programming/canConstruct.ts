
const canConstruct = (target: string, wordBank: string[]): boolean => {
    if (target === '') {
        return true;
    }
    else if (target.length < 1) {
        return false;
    }

    for (let word of wordBank) {
        if (target.startsWith(word)) {
            const remainingTarget = target.slice(word.length);
            return canConstruct(remainingTarget, wordBank);
        }
    }

    return false;
}


console.log(canConstruct('casa', ['ca', 'sa'])); // true




const canConstructMemoized = (target: string, wordBank: string[], memo = {}): boolean => {
    if (target in memo) {
        return memo[target];
    }
    if (target === '') {
        return true;
    }
    else if (target.length < 1) {
        return false;
    }

    for (let word of wordBank) {
        if (target.startsWith(word)) {
            const remainingTarget = target.slice(word.length);
            memo[target] = canConstruct(remainingTarget, wordBank);
            return memo[target]
        }
    }

    return false;
}

console.log(canConstructMemoized('cicciobastardo', ['cic', 'cio', 'bastard', '00', 'o'])) // true
console.log(canConstructMemoized('cicciobastardo', ['cicciobastardoz'])) // false