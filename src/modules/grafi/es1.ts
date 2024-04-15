import { Queue } from "@datastructures-js/queue";

// Inizializzazione dei nodi
interface INode { 
    adj?: INode[], 
    c?: 'white' | 'gray' | 'black', 
    d?: number, 
    p?: INode 
};
type TGraph = Record<string, INode>;

const nodeA: Partial<INode> = { adj: [] };
const nodeB: Partial<INode> = { adj: [] };
const nodeC: Partial<INode> = { adj: [] };
const nodeD: Partial<INode> = { adj: [] };
const nodeE: Partial<INode> = { adj: [] };
const nodeF: Partial<INode> = { adj: [] };

// Configurazione delle adiacenze (simulazione di "puntatori")
nodeA.adj.push(nodeB, nodeC);
nodeB.adj.push(nodeA, nodeD, nodeE);
nodeC.adj.push(nodeA, nodeF);
nodeD.adj.push(nodeB);
nodeE.adj.push(nodeB);
nodeF.adj.push(nodeC);

// Il grafo è rappresentato da un oggetto che tiene traccia dei nodi
const graph: TGraph = { A: nodeA, B: nodeB, C: nodeC, D: nodeD, E: nodeE, F: nodeF };

function getNodes(G) {
    return Object.keys(G).map(key => G[key])
}


function BFS(G: TGraph, S: INode) {

    const Q = new Queue<Partial<INode>>()
    const nodes = getNodes(G);

    // init
    for (const n of nodes) {
        n.c = 'white';
        n.p = null;
        n.d = Infinity;
    }

    S.c = 'gray';
    S.p = null;
    S.d = 0;
    Q.enqueue(S);  

    while (!Q.isEmpty()) {
        const u = Q.dequeue();
        u.adj.forEach(node => {
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


// console.log(BFS(graph, nodeA));




// Dato un grafo G = (V, E) non orientato, progettare un algoritmo
// efficiente per stabilire se G è un albero

// se |E| != |V| - 1 allora non è un albero!
// se |E| == |V| allora potrebbe esserlo. C'è da verificare che non ci siano cicli

// l'esistenza di un ciclo posso anche verificarla con la BFS. 
// se dal nodo che sto visitando noto che un suo adiacente
// che non il padre è di colore grigio o nero
function graphHasCycles(G: TGraph, S: INode) {
    const Q = new Queue<Partial<INode>>()
    const nodes = getNodes(G);

    // init
    for (const n of nodes) {
        n.c = 'white';
        n.p = null;
        n.d = Infinity;
    }

    S.c = 'gray';
    S.p = null;
    S.d = 0;
    Q.enqueue(S);  

    let hasCycle = false;

    while (!Q.isEmpty()) {
        const u = Q.dequeue();
        u.adj.forEach(node => {
            if (node.c === 'gray' && node.p !== u) {
                hasCycle = true;
            }
            else if (node.c === 'white') {
                node.c = 'gray';
                node.p = u;
                Q.enqueue(node);
            }
        })
        u.c = 'black';
    }

    return hasCycle;
}

const res2 = graphHasCycles(graph, nodeA);
console.log(res2);