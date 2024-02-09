function swap(A: number[], i: number, j: number) {
    const tmp = A[i];
    A[i] = A[j];
    A[j] = tmp;
}

function min_max(A) {
    let min = +Infinity
    let max = -Infinity
    for(let i=0; i<A.length-1; i++) {
        const el = A[i];
        if (el > max) {
            max = el;
        }
        if (el < min) {
            min  = el;
        }
    }
    return [min, max];
}

/**
 * BUBBLE SORT
 */
function bubbleSort(A: number[]) {
    for (let i = 0; i < A.length; i++) {
        for (let j = i+1; j < A.length; j++) {
            if (A[i] > A[j]) {
                // swap
                swap(A, i, j)
            }
        }        
    }
    return A;
}

const bubbleRes = bubbleSort([1, 8, 3, 4, 23, 6, 4]);
//console.log(bubbleRes)

/**
 * INSERTION SORT
 */
function insertionSort(A: number[]) {
    for (let i = 1; i < A.length; i++) {
        let value = A[i];
        let j = i - 1;
        while (j >= 0 && A[j] > value) {
            A[j + 1] = A[j]
            j = j-1
        }
        A[j+1] = value
    }
    return A;
}

const insertionRes = insertionSort([3, 2, 5, 9, 7, 1])
// console.log(insertionRes)

/**
 * QUICKSORT 
 */
function partition(A: number[], start: number, end: number) {

    const pivot = A[end];   

    let i = start - 1;

    for (let j = start; j < end; j++) {
        if (A[j] <= pivot) {
            i++;
            // swap
            swap(A, i, j)
        }        
    }

    // swap del pivot con i incrementato
    i++;
    A[end] = A[i];
    A[i] = pivot;

    return i;
}


function quicksort(A: number[], start: number, end: number) {
    if (start < end) {
        const pivot = partition(A, start, end);
        quicksort(A, start, pivot - 1);
        quicksort(A, pivot + 1, end);
    }
    return A;
}

const partitionArr = [4, 2, 3, 5, 6, 1, 10, 3, 0, 7, 5];
const partitionRes = quicksort(partitionArr, 0, partitionArr.length-1);
// console.log(partitionRes)




// scope dinamico
// come scope della funzione utilizza quello dove la funzione è stata chiamata
// oppure
// gli dientificatori liberi di una funzione hanno occorrenza di legame verso
// gli identificatori dichiarati nello scope dove la funzione viene chiamata

// scope statico
// come scope della funzione utilizza quello dove la funzione è stata dichiarata
// oppure
// gli dientificatori liberi di una funzione hanno occorrenza di legame verso
// gli identificatori dichiarati nello scope dove la funzione è stata dichiarata

let x = 2

function fn1() {
    console.log(x);
}


function fn2() {
    let x = 3;
    fn1();
}

fn2()
