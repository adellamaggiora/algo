// implementazione di un array in diversi modi, liste collegate, array
// in javascript, array, oggetti sono implementati con tabelle hash
// gli array javascript non sono celle in posizione contigua di memoria.
// sono strutture implementate attraverso funzioni hash. Logicamente sono
// in javascript gli array sono logicamente dati conitgui, fisicamente NO

// un dizionario è un modo generico per associare una chiave ad un valore
// la tabella hash è un modo più specifico per farlo (constraint in più, più potenza)

// Idea tabelle hash = usare le chiavi cone indici
// prendiamo un elemento -> funzione hash -> intero
// la tabella hash è implementata come un array, ma arrivo all'indice
// passando da una funzione. Data una chiave mi restituisce un numero.

// load factor indica la percentuale di riempimento della mia tabella hash
// e indichiamo con λ. Più si allungano le liste più degrada la performance
// n/m dove n = totale chiavi inserite e m la dimensione della tabella

// direct address 
// nel caso di array javascript l'insieme delle chiavi è mappato 
// con la funzione identità nell'insieme degli indici

const identity = (x: any) => x;

// funzione di hash generica
const hashFn = (fn: (x: any) => number) => (x: any): number => fn(x);


// funzione hash per array (specifica)
const hashArrayFn = hashFn(identity);

console.log(hashArrayFn(4)); // -> 4

// operazioni su dizionari

const dictOperations = {
    search: (T, k) => T[k],             // O(1)
    insert: (T, x) => T[x.key] = x,     // O(1)
    delete: (T, x) => T[x.key] = null   // O(1)
}

// spazio? O(size(U)) -> U = universo delle chiavi, magari le chiavi usate sono di meno

// se, applicando la funzione di hash all'universo delle chiavi, viene restituito un indice più volte
// avviene una collisione
// per non avere collisioni dovremmo avere una tabella grande quanto l'universo delle chiavi ma questo non sarebbe efficiente
// le collisioni sono dovute alla non iniettività della funzione di hash

// come sono fatte le funzioni hash?
// assumiamo di avere degli interi nell'universo delle chiavi
// un esempio potrebbe essere unsare la funzione modulo

const mod = (Tlength: number) => (x: number) => x % Tlength;

const tableLength = 10;
// funzione hash modulo su tabella di lunghezza 10
const hashIntegerFn = hashFn(mod(tableLength));

console.log(hashIntegerFn(3)); // -> 3
console.log(hashIntegerFn(10)); // -> 0
console.log(hashIntegerFn(192)); // -> 2


// quindi, i 3 ingredienti per progettare una tabella hash sono:

// 1) FUNZIONE HASH
// 2) DIMENSIONE DELLA TABELLA
// 3) RISOLUZIONE COLLISIONI


// le collisioni non si possono evitare, altrimenti avremmo una tabella grande quanto l'universo della chiavi
// come risolviamo le collisioni?

// a) CHAINING
// gli elementi della tabella sono liste

// b) OPEN ADDRESSING
// se la posizione corrente è occupata, usa la "prima successiva" che è libera
// fase di probing (fase in cui si cerca la successiva)
// il load factor in questo caso è al più uguale a 1
// quando questa tabell è piena bisgna fare un'operazione di re-hashing



