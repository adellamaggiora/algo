/**
 * STRUTTURE DATI
 */

// prima rappresentazione logica
// poi rappresentiazione fisica
// una rappresentazione logica può avere più rappresentazioni fisiche

// capire la struttura dati più efficiente
// in base al problema capire le operazioni che dobbiamo fare
// scegliere le strutture dati in base alle operazioni da fare

// operazioni definite su strutture dati (insert, delete, read)
// e sono definite da chi "inventa la struttura" in base al problema che abbiamo

// strutture dati inventate da noi, nuove, non appartenti a uno specifico linguaggio di prog.
// se già esistono sono delle "primitive" di un dato linguaggio.

// in C l'array è memorizzato (fisicamente) in maniera contigua
// pertanto cancellazione e inserimento costano O(n)
// assumiamo che L adotti la stessa implementazione fisica degli array in C. (dimensione fissa e celle contigue di memorie)

/**
 * INSIEMI DINAMICI
 */
// possono variare grandezza nel tempo
// ovvero gli elementi possono essere aggiunto e/o rimossi dinamicamente

/**
 * LISTE COLLEGATE
 */

// liste collegate (possono essere ordinate, non ordinate, circolari...)
// valori in posizioni contingue ma con sequenzialità

// singole
// |dato, next| -> |dato, next|
// next è il riferimento all'elemento successivo

// doppie
// |dato, next, prev| -> |dato, next, prev|

// singole / doppie
// ordinate / non ordinate
// circolari / non circolari

// 2*2*2 (2^3) possibili combinazioni

// in un array il costo di accesso a un elemento è O(1) mentre in una lista collegata è Θ(n)
// però in una lista collegata si riducono i tempi di cancellazione e inseriemento che sono O(1)
// rispetto ad un array che ha un costo O(n) per tali operazioni 

// Liste collegate
//
// insert O(1)
// delete O(n) doppia: O(1)



interface ILinkedList {
    head: IListItem;
    tail?: IListItem;
}

interface IListItem {
    key: any;
    next?: IListItem;
    // prev c'è se doppiamente concatenata
    prev?: IListItem;
}

const item3: IListItem = {
    key: 3,
    next: null
}

const item2: IListItem = {
    key: 2,
    next: item3
}

const item1: IListItem = {
    key: 1,
    next: item2,
    prev: null
}

// Collegamento dei puntatori prev dei nodi
item2.prev = item1;
item3.prev = item2;


const list: ILinkedList = { head: item1 };

/**
 * Cerca un elemento per una data data chiave in una lista concatenata
 * costo Θ(n)
 * @param L 
 * @param k 
 * @returns 
 */
const listSearch = (L: ILinkedList, k: any) => {
    let result = L?.head;
    while (result !== null && result.key !== k) {
        result = result.next;
    }
    return result;
}

// console.log(listSearch(list, 2));

/**
 * inserisce un elemento in testa alla lista concatenata
 * costo O(1)
 * @param L 
 * @param x 
 */
const listInsert = (L: ILinkedList, x: IListItem) => {
    x.next = L.head;
    if (L.head !== null) {
        L.head.prev = x;
    }
    L.head = x;
    x.prev = null;
}

// console.log(list)
// listInsert(list, { key: 'hello world' });
// console.log(list);

/**
 * cancella un elemento (puntatore) dalla lista
 * costo O(1)
 */
const listDelete = (L: ILinkedList, x: IListItem) => {
    if (x?.prev !== null) {
        x.prev.next = x.next;
    }
    else {
        L.head = x.next;
    }
    if (x?.next !== null) {
        x.next.prev = x.prev;
    }
}

// listDelete(list, item2);
// console.log(list.head);

/**
 * cancella un elemento dalla lista data una chiave
 * costo Θ(n) - prima di fare l'eliminazione è richiesta la ricerca
 * @param L 
 * @param k 
 */
const listDeleteByKey = (L: ILinkedList, k: any) => {
    const x = listSearch(L, k);
    if (x) {
        listDelete(L, x);
    }
}

// listDeleteByKey(list, 2);
// console.log(list);


/**
 * LISTA DOPPIAMENTE CONCATENATA CON SENTINELLA
 */

interface ILinkedListSentinel {
    nil: IListItem;
}

// nodo sentinella
const L_nil: IListItem = {
    key: null,
    next: null,
    prev: null
}

const L2: ILinkedListSentinel = {
    nil: L_nil
}

L2.nil.next = L_nil;
L2.nil.prev = L_nil;

// console.log(L2)

const listSearch2 = (L: ILinkedListSentinel, k: any) => {
    let x = L.nil.next;
    while (x !== null && x.key !== k) {
        x = x.next;
    }
    return x;
}

const listInsert2 = (L: ILinkedListSentinel, x: IListItem) => {
    x.next = L.nil.next;
    L.nil.next.prev = x;
    L.nil.next = x;
    x.prev = L.nil;
}

const listDelete2 = (x: IListItem) => {
    x.prev.next = x.next;
    x.next.prev = x.prev;
}

const item4 = { key: 4 };
const item5 = { key: 5 };

// listInsert2(L2, item4);
// listInsert2(L2, item5);
// console.log(L2);
// listDelete2(item5);
// listDelete2(item4);
// console.log(L2);


/***
 * 
 * 
 *  IMPLEMENTAZIONE DI PILA E CODA CON LISTE COLLEGATE
 * 
 * 
 */

// pila
// operazioni: push O(1), pop O(1), top O(1)

const buildStack = (L: ILinkedList) => {
    const _top = () => L.head;
    const _pop = () => listDelete(L, L.head);
    const _push = (x: any) => listInsert(L, { key: x });

    return {
        top: _top,
        pop: _pop,
        push: _push,
    }
}

const stack = buildStack(list);
// stack.pop()
// stack.pop()
// stack.pop()
// stack.push(190)
// stack.push(250)
// console.log(stack.top())


// coda
// operazioni equeue O(1), dequeue O(1) 



// simply linked list reverse

const L3: ILinkedList = {
    head: {
        key: 1,
        next: {
            key: 2,
            next: {
                key: 3,
                next: null
            }
        }
    }
}


const listReverse = (L: ILinkedList) => {
    let prev = null;
    let current = L.head;
    let next = null;

    while (current !== null) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    L.head = prev;
}

listReverse(L3)
console.log(L3)
