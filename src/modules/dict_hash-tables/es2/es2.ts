// Si consideri un array S di n chiavi intere

// sia sia il codice di un algoritmo che con un'unica scansione
// di S conti il numero r di chiavi distinte in S. Usare un dizionario D
// inizialmente vuoto (non interessa l'implementazione di D)

// facendo l'assunzione che D sia implementato come un array
// ordinato, si analizzi la complessità in funzione di n e del numero r
// di chiavi distinte


const S = [1, 2, 3, 1, 2, 4];
const D = {}
let r = 0;

for (let i = 0; i < S.length; i++) {
    const el = S[i];
    if (!D[el]) {
        D[el] = true;
        r++;
    }
}

console.log(r);

// costi 
// ricerca n volte -> ogni ricerca costa SEARCH sul dizionario
// inserimento r volte


// assumiamo adeso che D sia implementato come un array ordinato
// in questo caso sarebbe
// [1, 2, 3, 4]

// ARRAY ORDINATO
// ogni ricerca costa O(logr)
// ogni inserimento costa O(r) (spostamento di tutti gli elementi, nel caso peggiore, implementazione array C-like - elementi contigui in memoria)

// quanto volte faccio l'operazione di ricerca? n volte
// quante volte faccio l'operazione di inserimento? r volte

// costo totale = O(nlogr + r^2)

// implementazione con 2-3 albero, supporta le operazioni di inserimento, ricerca, cancellazione
// costo totale = O(nlogr + rlogr)


// TABELLA HASH
// facendo l'assunzione che D sia implementato come una tabella hash, si analizzi la complessità in funzione di n e del numero r di chiavi distinte

// COSTI
// @todo cambia dalle liste di trabocco e open addressing?
// search : Θ(1 + lamda)
// insert : Θ(1 + lamda)

// assumendo che la funzione di hash sia buona e il fattore di caricamento decente
// costo totale = Θ(n)
