interface IRootedTree {
    key: number;
    leftChild?: IRootedTree;
    rightSibiling?: IRootedTree;
}

const tree: IRootedTree = {
    key: 1,
    leftChild: {
        key: 2,
        rightSibiling: {
            key: 3,
            leftChild: {
                key: 4,
                rightSibiling: {
                    key: 5,
                    rightSibiling: {
                        key: 6
                    }
                }
            }
        },
        leftChild: {
            key: 7
        } 
    }
}

// Scrivete una procedura con tempo O(n) che stampa tutte le chiavi di un albero 
// radicato arbitrario di n nodi, quando l’albero è memorizzato utilizzando la
// rappresentazione figlio-sinistro fratello-destro.

function printKeys(T: IRootedTree) {
    if (!T) {
        return;
    }
    printKeys(T.leftChild);
    console.log(T.key);
    printKeys(T.rightSibiling);
}

printKeys(tree);

// la visita di un albero (anticipata, simmetrica e posticipata) sembra del tutto simile
// a quella di un albero binario!! stonks