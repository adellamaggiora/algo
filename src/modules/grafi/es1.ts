import { Queue } from "@datastructures-js/queue";

// Inizializzazione dei nodi
interface INode { 
    adiacenti?: INode[], 
    c?: 'white' | 'gray' | 'black', 
    d?: number, 
    p?: INode 
};
type TGraph = Record<string, INode>;

const nodoA: Partial<INode> = { adiacenti: [] };
const nodoB: Partial<INode> = { adiacenti: [] };
const nodoC: Partial<INode> = { adiacenti: [] };
const nodoD: Partial<INode> = { adiacenti: [] };
const nodoE: Partial<INode> = { adiacenti: [] };
const nodoF: Partial<INode> = { adiacenti: [] };

// Configurazione delle adiacenze (simulazione di "puntatori")
nodoA.adiacenti.push(nodoB, nodoC);
nodoB.adiacenti.push(nodoA, nodoD, nodoE);
nodoC.adiacenti.push(nodoA, nodoF);
nodoD.adiacenti.push(nodoB);
nodoE.adiacenti.push(nodoB, nodoF);
nodoF.adiacenti.push(nodoC, nodoE);

// Il grafo è rappresentato da un oggetto che tiene traccia dei nodi
const graph: TGraph = { A: nodoA, B: nodoB, C: nodoC, D: nodoD, E: nodoE, F: nodoF };

function leggiVertici(G) {
    return Object.keys(G).map(key => G[key])
}


function BFS(G: TGraph, v: string) {

    const Q = new Queue<Partial<INode>>()
    const nodes = leggiVertici(G);

    // init
    for (const n of nodes) {
        n.c = 'white';
        n.p = null;
        n.d = Infinity;
    }

    G[v].c = 'gray';
    G[v].p = null;
    G[v].d = 0;
    Q.enqueue(G[v]);  

    while (!Q.isEmpty()) {
        const u = Q.dequeue();
        u.adiacenti.forEach(node => {
            if (node.c === 'white') {
                node.c = 'gray';
                node.p = u;
                node.d = u.d + 1;
                Q.enqueue(node);
            }
        })
        u.c = 'black';
    }
    return G;
}

const result = BFS(graph, 'A');

console.log(result);

// Dato un grafo G = (V, E) non orientato, progettare un algoritmo
// efficiente per stabilire se G è un albero

// se |E| != |V| - 1 allora non è un albero!
// se |E| == |V| allora potrebbe esserlo. C'è da verificare che non ci siano cicli

// l'esistenza di un ciclo posso anche verificarla con la BFS. 
// se dal nodo che sto visitando noto che un suo adiacente
// che non il padre è di colore grigio o nero


function graphHasCycles(G: TGraph) {

}