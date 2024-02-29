// proprietà heap
// 1 albero binario quasi completo
// 2 prop max-heap: chiave node >= chiave figli

import { utils } from "../../utilities/utils";

// implementabile fisica tramine array
// un array senza buchi, al massimo non è riempito l'array nelle ultime posizioni (bt quasi completo)


// se l'array iniziasse da 1
// parent(i) => Math.floor(i/2)
// left(i) => 2i
// right(i) => 2i + 1


/**----------------------------------
 * operazioni su heap
 -----------------------------------*/
const parentIdx = (i: number) => i === 0 ? null : Math.floor((i - 1)/2);
const leftIdx = (i: number) => 2 * i + 1;
const rightIdx = (i: number) => 2 * i + 2;

// max-heapify 
//-------------
// supponiamo che un nodo n sia più piccolo di uno dei suoi figli
// assumiamo che i sottoalberi sx e dx di n siano max-heap
// a partire da n, ristabilire la prop di max-heap
// c'è da ristabilire l'ordine!

// facciamo lo scambio con il figlio maggiore finchè la prop di max-heap è verificata
// ovvero: i nodi figli sono < al nodo n o arriviamo a una foglia

/**
 * Fa scendere un nodo finchè non ristabiliamo la proprietà di max-heap.
 * @param A
 * @param i
 */
const maxHeapify = (A: number[], i: number): void => {
    const l = leftIdx(i);
    const r = rightIdx(i);
    let maxIndex: number = i;
    // controllo che l sia un indice all'interno dell'array (che non sfori)
    // e scelgo il max tra A[l] e A[i]
    if (l < A.length && A[l] > A[i]) {
        maxIndex = l;
    }
    // controllo che r sia un indice all'interno dell'array (che non sfori)
    // e scelgo il max tra il A[maxIndex] e A[r]
    if (r < A.length && A[r] > A[maxIndex]) {
        maxIndex = r;
    }
    // se l'indice massimo non è i allora si scambia i con l'indice massimo
    // e si effettua ricorsivamente la chiamata finchè l'ordine non è stabilito
    if (i !== maxIndex) {
        utils.swap(A, i, maxIndex);
        // costo della chiamata ricorsiva? θ(logn)
        maxHeapify(A, maxIndex);        
    }
}


// come si imposta l'equazione di ricorrenza per la funzione ricorsiva max-heapify?
// costo di tutto il resto di max-heapify?

/**
 * const maxHeapify {
 * ..
 * ..   θ(1) costo costante
 * ..
 * 
 *      maxHeapify(A, maxIndex) costo della chiamata ricorsiva (bisogna individuare il caso pessimo)
 *      caso pessimo: ultimo livello pieno a metà (solo sottoalbero destro)
 * }
 * 
 * l'equazione di ricorrenza è espressa in termini di n
 * il sotto albero sx ne conterrà 2/3 nodi mentre nel sottoalbero dx 1/3 nodi
 * 
 * T(n) <= T(2n/3) + θ(1)
 * applicando il master theorem 
 * O(logn)
 * 
 */


// build max-heap
//---------------

/**
 * Dato un array non ordinato costruisce un max-heap
 * @param A 
 * @param n numero di elementi nell'array
 */
const buildMaxHeap = (A: number[], n: number): void => {
    const p = parentIdx(n - 1);
    for (let i = p; i >= 0; i--) {
        maxHeapify(A, i);
        console.log(A)        
    }
}


const arr = [4, 1, 3, 2, 16, 9, 10, 99];
buildMaxHeap(arr, arr.length);