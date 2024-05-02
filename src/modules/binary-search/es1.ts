// ricerca binaria ricorsiva

// problema di appartenenza a un insieme
function binarySearch(S: number[], x: number, i: number, j: number) {
    if (i > j) {
        return false;
    }

    const half = Math.floor((i + j) / 2);
    const el = S[half];

    // bingo!
    if (x === el) return true;

    if (x > el) {
        return binarySearch(S, x, half + 1, j);
    }
    else {
        return binarySearch(S, x, i, half - 1);
    }

}

const set = [1, 2, 3, 4, 5, 5]

const res = binarySearch(set, 5, 0, set.length);
console.log(res);