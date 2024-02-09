// scrivere una funzione ricorsiva che cerca un elemento dato in un array non ordinato

const arr = [3, 4, 1, 60, 7, 10];

function recursiveSearch(A: number[], el: number) {

    if (A.length === 0) {
        return false
    }
    else {
        if (A[A.length-1] === el) {
            return true
        }
        else {
            A.pop()
            recursiveSearch(A, el)
        }
    }
  
}

// scrivere una funzione ricorsiva che cerca l'elemento di valore massimo nell'array

function recursiveMax(A: number[]) {
    if (A.length === 1) {
        return A[0];
    }
    else {
        const first = A[0];
        const last = A[A.length - 1];
        first > last ? A.splice(A.length - 1, 1) :  A.splice(0, 1);
        return recursiveMax(A);
    }
}

// scrivere una funzione ricorsiva che conta le occorrenze di un elemento dato in un array

function recursiveCount(A: number[], n: number, el: number): number {
    if (n === 0) {
        return 0;
    }
    else {
        let c = 0
        if (A[n-1] === el) {
            c++;
        }
        return c + recursiveCount(A, n-1, el);
    }
    
}

// scrivere una funzione ricorsiva della ricerca binaria di un elemento in un array ordinato
const ordered = [0, 1, 2, 3, 321, 55, 4, 5, 6, 7, 8, 9, 31];

function binarySearch(A: number[], el: number, start: number, end: number) {
    if (start > end) {
        return -1;
    }

    const mediumIndex = Math.floor((start + end) / 2);
    if (A[mediumIndex] === el) {
        return mediumIndex;
    }
    else {
        if (A[mediumIndex] > el) {
            return binarySearch(A, el, start, mediumIndex - 1)
        }
        else {
            return binarySearch(A, el, mediumIndex + 1, end)
        }
    }    

}


// console.log(binarySearch(ordered, 123, 0, ordered.length - 1));


function recursiveMax2(A: number[], n: number): number {
    if (n === 1) {
        return A[0];
    }
    return Math.max(A[n - 1], recursiveMax2(A, n - 1))
}

//console.log(recursiveCount([1, 3, 4, 1, 5, 1], 6, 1))


// insertion sort (induzione)   
function insertionSortInPlace(A: number[]) {
    // i indice array ordinato
    // j indice prossimo elemento

    for (let j = 1; j < A.length; j++) {
        
        const next = A[j];
        let i = j - 1;

        while (i > -1 && A[i] > next) {
            A[i+1] = A[i];
            i--;
        }

        A[i+1] = next
    }

    return A
}

console.log(insertionSortInPlace([5,4,8,4,1]))

// selection sort (inserimento del più piccolo)
function selectionSort(A: number[]) {

}
   
// ricorsivo
function mergeSort() {

}

// array ordinati in input
function merge(A1: number[], A2: number[]) {
 //   const length =
}