// 2-3 alberi
// https://it.wikipedia.org/wiki/Albero_2-3

// un albero è come se fosse una lista collegata ma
// ogni nodo può puntare a più di un elemento
// ongi nodo deve puntare a elementi diversi

// i 2-3 alberi
// fanno parte della categoria ALBERI BILANCIATI
// pertanto le operazioni hanno costo logaritmico
// rispetto alle categori alberi roos-neri e alberi avl
// gli alberi 2-3 non usano le rotazioni che sono
// operazioni di ribilanciamento dei nodi

/**
 * PROPRIETA
 */

// 1. hanno minimo 2, massimo 3 figli per nodo
// 2. tutte le foglie sono allo stesso livello
// 3. tutti i dati sono memorizzati nelle foglie in ordine crescente da sx a dx
// 4. i nodi interni v mantengono (al più) due info supplementari *1
//      a) S[v] massima chiave nel sottoalbero del primo figlio di v
//      b) M[v] se v ha tre figli, massima chiave nel sottoalbero del secondo figlio di v

// lemma
// n = numero di nodi
// f = foglie
// 2^(h+1) - 1 <= n <= ((3^h+1) - 1) / 2
// 2^h <=f <= 3^h

// Altezza: Θ(logn)

// gli alberi 2-3 si ribilanciano utilizzando operazioni
// di split e merge
// la struttura dati di base è la b+ tree 
// la stessa usata negli indici dei database 

// *1 i dati sono solo nelle foglie e i nodi intermedi contengono
// degli indici che sono una conseguenza dei dati sottostanti (nelle foglie)

// le proprietà dell'albero devono essere mantenute durante le operazioni di inserimento e modifica
// se riusciamo a farlo allora abbiamo la garanzia che le operazioni vengono fatte in tempo logaritmico

// differenza tra aalberi binari
// ogni volta che inserisco un dato sarà inserito allo stesso livello degli altri
// le modifiche nell'altezza dell'albero avvengono su modifica della radice perchè i dati 
// DEVONO RIMANERE TUTTI SULLO STESSO LIVELLO


// OPERAZIONI

// implementazione

interface ILeafNode {
    value: number;
}

interface IInternalNode {
    // massima chiave nel sottoalbero del primo figlio di v
    S: number;
    // se v ha tre figli, massima chiave nel sottoalbero del secondo figlio di v
    M?: number;
    // riferimenti (puntatori) ai nodi figli
    v1: ILeafNode | IInternalNode;
    v2: ILeafNode | IInternalNode;
    v3?: ILeafNode | IInternalNode;

}

// costo Θ(logn)
const treeSearch = (T: IInternalNode, x: number) => {
    // la ricerca parte dalla radice
    // usare il valori di S e, possibilmente il valore di M
    // questo ci dice se scendere nell'albero sx, centrale o dx
    
    // costo proporzionale all'altezza dell'albero che è Θ(logn)

}


// costo Θ(logn)
const treeInsert = (L: ILeafNode, T: IInternalNode) => {
    // parte con una ricerca per determinare dove inserire l'elemento
    // bisogna sempre aggiornare gli indici (S, M) del padre e, eventualmente, dei nodi antenati

    // se andassimo a inserire una foglia in un nodo con già 3 figli avrei un sovraccarico
    // e quindi bisogna usare un'operazione detta SPLIT

    // la split prende il nodo sovraccarico e lo divide in 2 figli
    // al caso pessimo lo spit arriva fino alla radice (tutti i parent hanno già 3 figli)
    // e quindi l'albero cresce in altezza verso l'alto di 1
}

// costo Θ(logn)
const treeDelete = (L: ILeafNode, T) => {
    // cancellazione riferimento al nodo da cancellare
    // e aggiornamento dei nodi interni

    // se cancelliamo un nodo appartenente a un padre con 2 figli la prop 
    // che ogni nodo deve eavere almeno 2 figli viene a mancare
    // quindi bisiogna fare la fusione con il fratello
}

// costi migliori rispetto a ABR (alberi binari ricerca) 
// I costi in ABR sono O(h) ma potrebbero essere sbilanciati ne quindi h = n

// LA STRUTTURA DATI 2-3 ALBERI È LA STRUTTURA MIGLIORE CHE VEDIAMO NEL CORSO
// DI PROG E ALGO PER MEMORIZZARE INSIEMI DINAMICI