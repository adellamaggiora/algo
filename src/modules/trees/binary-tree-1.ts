// sia T un albero binario in cui ogni nodo memorizza tre valori: val, sx, dx
// un albero binario ha ogni nodo con al massimo 2 nodi figli, se ne ha di più l'albero
// è k-ario

// val è un valore numerico, sx e dx contengono riferimenti al figlio sx e figlio dx (eventualmente null)
// left-child e right sibiling si usano per alberi non binari, quando si utilizzano alberi in cui ogni nodo
// può avere un numero variabile di figli

// con T si identifica anche il nodo radice dell'albero

// Si scriva una funzione ricorsiva trovaMin(T) che dato un albero binario T, restituisca il minimo valore
// memorizzato nei nodi di T. Si valuti la complessità della soluzione proposta

interface INode {
    val: number;
    left?: INode | null;
    right?: INode | null;
}

const tree: INode = {
    val: 100,
    left: {
        val: 90,
        left: {
            val: 10,
            left: null,
            right: null
        },
        right: {
            val: 1,
            right: null,
            left: null
        }
    },
    right: {
        val: 12,
        left: {
            val: 5,
            left: null,
            right: null
        }
    }
}

// restituisce il minimo valore nei nodi in un albero binario
function findMin(T: INode) {
    if (!T) {
        return +Infinity;
    } else {
        const minLeft = findMin(T.left);
        const minRight = findMin(T.right);
        return Math.min(T.val, minLeft, minRight);
    }
}

const min = findMin(tree);
console.log(`min: ${min}`);
// analisi della complessità asintotica
// T(n) = T(k) + T(n - k -1) + c
// master theorem -> Θ(n)


// restituisce il numero di nodi in un albero binario
function findCount(T: INode) {
    if (!T) {
        return 0;
    } else {
        // nodi a sx, nodi a dx, nodo corrente
        return findCount(T.left) + findCount(T.right) + 1;
    }
}

const count = findCount(tree);
console.log(`count: ${count}`);
// complessità -> Θ(n)


// !!importante!!

// tutte le volte che bisogna guardare tutti i nodi e ogni volta ricombinare, lo schema 
// divide et impera di una visita di albero rimane la stessa

// restituisce l'altezza di un albero binario
// nota: l'altezza è il massimo numero di antenati da una qualsiasi nodo foglia
function findHeight(T: INode) {
    if (!T) {
        // impera
        return -1;
    }

    else {
        // divide
        const leftHeight = findHeight(T.left);
        const rightHeight = findHeight(T.right);
        // ricombina
        return Math.max(leftHeight, rightHeight) + 1;
    }
}

const height = findHeight(tree);
console.log(`height: ${height}`)


// restituisce true se l'albero binario è completo, altrimenti false
// completo: ogni nodo ha zero o 2 figli
function getIsComplete(T: INode) {
    // foglia
    if (!T.left && !T.right) {
        return true;
    }
    if (!!T.left && !!T.right) {
        // combina
        return getIsComplete(T.left) && getIsComplete(T.right);
    }
    // caso un solo figlio
    return false;
}

const isComplete = getIsComplete(tree);
console.log(`isComplete: ${isComplete}`);
// complessita O(n)
// potrebbe ritornare subito false ma nel caso pessimo devo controllare tutti i nodi
// per rispondere true invece vanno verificati tutti


// albero completamente bilanciato: se è completo e tutte le foglie hanno la stessa profondità
// è una proprietà non composizionale
// non tutti i problemi hanno la proprietà di composizione della risposte
function getIsFullyBalance(T: INode) {
    // è composizionale nelle prop completamente bilanciato + profondità (coppie)
    // se formulo il problema in termini di queste coppie il mio problema diventa composizionale
    

    function getBalanced() {

    }
}


// Scrivete una procedura ricorsiva con tempo O.n/ che, dato un albero binario di n
// nodi, stampa la chiave di ogni nodo dell’albero.
function printBinaryTreeKeys(T: INode) {
    if (!T) {
        return;
    }
    console.log(T.val);
    printBinaryTreeKeys(T.left);
    printBinaryTreeKeys(T.right);
    
    // console.log(right)
}

// printBinaryTreeKeys(tree)


// 10.4-5
// Scrivete una procedura non ricorsiva con tempo O.n/ che, dato un albero bina-
// rio di n nodi, stampa la chiave di ogni nodo. La procedura non deve utilizzare
// più di una quantità costante di memoria all’esterno dell’albero stesso e non deve
// modificare l’albero, neanche solo temporaneamente, durante l’esecuzione.
function printBinaryTreeKeysNotRecursive(T: INode) {
    while (T.left) {
        
    }
}