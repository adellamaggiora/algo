// progettare un algoritmo che dato un array A di n interi, stabilisca se l'array
// rappresenta un max-heap, e discuterne la complessità in tempo.

// si scriva la psudocodice dell'algoritmo che prende in input l'array e restituisce un valore booleano


// posso fare una scansione a partire dal secondo nodo nell'array (la radice non ha parent) e controllare
// che ogni nodo rispetti la prop di max-heap, ovvero che il padre sia >= del nodo stesso


const parentIdx = (i: number) => i === 0 ? null : Math.floor((i - 1) / 2);
const leftChildIdx = (i: number) => 2 * i + 1;
const rightChildIdx = (i: number) => 2 * i + 2;

const arr = [99, 16, 10, 2, 4, 9, 3, 1, 2]

/**
 * sembra funzionare!
 * @param A 
 * @returns 
 */
function checkMaxHeap(A: number[]) {
    for (let i = 1; i < A.length; i++) {
        const node = A[i];
        const parent = A[parentIdx(i)];
        // prop di max-heap: ogni nodo deve avere padre >= a esso stesso
        if (node > parent) {
            return false;
        }
    }
    return true;
}

/**
 * sembra funzionare!
 * @param A 
 * @returns 
 */
function checkMaxHeap2(A: number[]) {
    const lastInternalNodeIdx = parentIdx(A.length - 1);

    for (let i = lastInternalNodeIdx; i >= 0; i--) {
        const node = A[i];
        const leftChild = A[leftChildIdx(i)];
        const rightChild = A[rightChildIdx(i)];
        // prop di max-heap: ogni nodo deve avere figli <= a esso estesso
        if (node < leftChild || node < rightChild) {
            return false;
        }
    }
    return true;
}

function checkMaxHeapRecursive(A: number[], nodeIdx: number) {
    const leftChild = A[leftChildIdx(nodeIdx)];
    const rightChild = A[rightChildIdx(nodeIdx)];
    // se il nodo è foglia allora è un max-heap
    const isLeaf = !leftChild || !rightChild;
    if (isLeaf) {
        return true;
    }
    // se il nodo ha figli che sono maggiori di lui si viola la prop max-heap
    if (A[nodeIdx] < leftChild || A[nodeIdx] < rightChild) {
        return false;
    }

    const leftIsMaxHeap = checkMaxHeapRecursive(A, leftChildIdx(nodeIdx));
    const rightIsMaxHeap = checkMaxHeapRecursive(A, rightChildIdx(nodeIdx));
    return leftIsMaxHeap && rightIsMaxHeap;
}


const result = checkMaxHeapRecursive(arr, 0);
// const result = checkMaxHeap(arr)

console.log(result);