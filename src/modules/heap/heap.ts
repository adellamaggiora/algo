// heaps -> coda con priorità
// coda -> FIFO

import { utils } from "../../utilities/utils"

// Sia U un insieme totalmente ordinato. 
// Una coda con priorità (heap) A è un sottoinsieme di U
// su cui sono ammesse le seguenti operazioni

interface IHeapAPI {
    // isEmpty: (A: number[]) => boolean
    // isFull: (A: number[]) => boolean
    min?: (A: number[]) => number
    max?: (A: number[]) => number
    build?: (A: number[]) => void
    insert?: (A: number[], x: number) => void
    delete?: (A: number[], i: number) => void
    modifyKey?: (A: number[], i: number, k: number) => void,
    heapify?: (A: number, i: number) => void
}


const nodeAPI = {
    parentIndex: (i: number) => Math.floor((i - 1) / 2),
    leftChildIndex: (i: number) => 2 * i + 1,
    rightChildIndex: (i: number) => 2 * i + 2
}


// la chiave di ogni nodo è minore o uguale
// delle chiavi associate ai propri figli (heap di minimo min-heap)
// quindi la radice contiene la chiave più piccola


// totale nodi albero binario completo -> 2^(h+1) - 1
// i nodi interni hanno indice da 1 a Math.floor(n/2)
// le foglie hanno indice da Math.floor(n/2) + 1 a n

// il minimo numero di nodi di un heap di altezza h è 2^h
// il massimo numero di nodi di un heap di altezza h è 2^(h+1)-1
// i nodi ad altezza h in uno heap sono al massimo 2^h


////////////////
// heapify(A, i)
////////////////

// è una procedura che assume che i sottoalberi sx e dx del nodo i
// siano degli heap ma A[i] può essere più grande (o più piccolo) 
// dei propri figli. Se questo è il caso, la procedura fa scivolare l'elemento A[i]
// lungo un cammino dell'albero in modo da ristabilire la proprietà
// degli heap

function heapify(heapArray: number[], index: number): void {
    const length = heapArray.length;
    let smallest = index;
    const leftChild = nodeAPI.leftChildIndex(index);
    const rightChild = nodeAPI.rightChildIndex(index);

    if (leftChild < length && heapArray[leftChild] < heapArray[smallest]) {
        smallest = leftChild;
    }

    if (rightChild < length && heapArray[rightChild] < heapArray[smallest]) {
        smallest = rightChild;
    }

    if (smallest !== index) {
        utils.swap(heapArray, index, smallest);
        heapify(heapArray, smallest);
    }
}


const heapAPI: IHeapAPI = {
    build: (A: number[]) => {
        const lastIndexWithChildren = Math.floor((A.length - 2) / 2);
        for (let i = lastIndexWithChildren; i >= 0; i--) {
            heapify(A, i);
        }
        return A;
    },
    insert: (A: number[], x: number) => {
        A.push(x);
        let xIndex = A.length - 1;
        let parentIndex = nodeAPI.parentIndex(xIndex);
        
        while (A[parentIndex] > A[xIndex]) {
            // swap keys
            let tmpKey = A[parentIndex];
            A[parentIndex] = A[xIndex];
            A[xIndex] = tmpKey;
            // swap indexes
            let tmpIndex = parentIndex;
            xIndex = parentIndex
            parentIndex = nodeAPI.parentIndex(tmpIndex);
        }
    },
    min: (A: number[]) => {
        return A[0]
    },
    // max: (A: number[]) => {
    //     if (A.length === 0) {
    //         return -Infinity;
    //     }
    //     if (A.length === 1) {
    //         return A[0];
    //     }
    //     else {
    //         const current = A[0];
    //         return Math.max
    //     }
    // }

}



const array = [20, 30, 10, 50, 40, 60, 1, -1, 1, 3, 45, 5, -2];
heapAPI.build(array)

console.log('Array dopo heapify su tutti i nodi:', array);

console.log(heapAPI.min(array))



