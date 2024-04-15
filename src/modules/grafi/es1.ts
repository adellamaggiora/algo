import { Queue } from "@datastructures-js/queue";

// Inizializzazione dei nodi
interface IGNode { adiacenti: Partial<IGNode>[], c: string, d: number, p: Partial<IGNode> };

const nodoA: Partial<IGNode> = { adiacenti: [] };
const nodoB: Partial<IGNode> = { adiacenti: [] };
const nodoC: Partial<IGNode> = { adiacenti: [] };
const nodoD: Partial<IGNode> = { adiacenti: [] };
const nodoE: Partial<IGNode> = { adiacenti: [] };
const nodoF: Partial<IGNode> = { adiacenti: [] };

// Configurazione delle adiacenze
nodoA.adiacenti.push(nodoB, nodoC);
nodoB.adiacenti.push(nodoA, nodoD, nodoE);
nodoC.adiacenti.push(nodoA, nodoF);
nodoD.adiacenti.push(nodoB);
nodoE.adiacenti.push(nodoB, nodoF);
nodoF.adiacenti.push(nodoC, nodoE);

// Il grafo è rappresentato da un oggetto che tiene traccia dei nodi
const grafo = { A: nodoA, B: nodoB, C: nodoC, D: nodoD, E: nodoE, F: nodoF };

function leggiVertici(G) {
    return Object.keys(G).map(key => G[key])
}


function BFS(G, v) {

    const Q = new Queue<Partial<IGNode>>()
    const vertici = leggiVertici(G);

    // init
    for (const _ of vertici) {
        _.c = 'bianco';
        _.p = null;
        _.d = Infinity;
    }

    G[v].c = 'grigio';
    G[v].p = null;
    G[v].d = 0;
    Q.enqueue(G[v]);  

    while (!Q.isEmpty()) {
        const u = Q.dequeue();
        u.adiacenti.forEach(node => {
            if (node.c === 'bianco') {
                node.c = 'grigio';
                node.p = u;
                node.d = u.d + 1;
                Q.enqueue(node);
            }
        })
        u.c = 'nero';
    }
    return G;
}

const result = BFS(grafo, 'A');

console.log(result);
