import { Queue } from "@datastructures-js/queue";
import { generateStack } from "../stack/stack";


// Inizializzazione dei nodi
interface INode {
    adj?: INode[],
    c?: 'white' | 'gray' | 'black',
    d?: number,
    p?: INode,
    start?: number,
    end?: number
};
type TGraph = Record<string, INode>;

const nodeA: Partial<INode> = { adj: [] };
const nodeB: Partial<INode> = { adj: [] };
const nodeC: Partial<INode> = { adj: [] };
const nodeD: Partial<INode> = { adj: [] };
const nodeE: Partial<INode> = { adj: [] };
const nodeF: Partial<INode> = { adj: [] };

// Configurazione delle adiacenze (simulazione di "puntatori")
nodeA.adj.push(nodeB, nodeC, nodeD);
nodeB.adj.push(nodeD);
nodeC.adj.push(nodeD, nodeE);
nodeD.adj.push();
nodeE.adj.push(nodeB);

// Il grafo è rappresentato da un oggetto che tiene traccia dei nodi
const graph: TGraph = { A: nodeA, B: nodeB, C: nodeC, D: nodeD, E: nodeE, F: nodeF };

function getNodes(G): INode[] {
    return Object.keys(G).map(key => G[key])
}



function BFS(G: TGraph, s: INode) {

    const Q = new Queue<Partial<INode>>()
    const nodes: INode[] = getNodes(G);

    // init
    for (const n of nodes) {
        n.c = 'white';
        n.p = null;
        n.d = Infinity;
    }

    s.c = 'gray';
    s.p = null;
    s.d = 0;
    Q.enqueue(s);

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

// const res1 = BFS(graph, nodeA);
// console.log(res1);
// la DFS non usa una pila come struttura dati di appoggio!








// Dato un grafo G = (V, E) non orientato, progettare un algoritmo
// efficiente per stabilire se G è un albero

// se |E| != |V| - 1 allora non è un albero!
// se |E| == |V| allora potrebbe esserlo. C'è da verificare che non ci siano cicli

// l'esistenza di un ciclo posso anche verificarla con la BFS. 
// se dal nodo che sto visitando noto che un suo adiacente
// che non il padre è di colore grigio o nero
function graphHasCycles(G: TGraph, s: INode) {
    const Q = new Queue<Partial<INode>>()
    const nodes = getNodes(G);

    // init
    for (const n of nodes) {
        n.c = 'white';
        n.p = null;
        n.d = Infinity;
    }

    s.c = 'gray';
    s.p = null;
    s.d = 0;
    Q.enqueue(s);

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

// const res2 = graphHasCycles(graph, nodeA);
// console.log(res2);












// Sia G = (V, E) un grafo connesso e non orientato. Progettare un
// algoritmo che ricevuto in ingresso G e un suo vertice s, restituisca il
// numero di vertici che si trovano a distanza massima da s

function BFS_MAX(G: TGraph, s: INode) {

    const Q = new Queue<Partial<INode>>()
    const nodes = getNodes(G);

    let count = 0;
    let max = 0;

    // init
    for (const n of nodes) {
        n.c = 'white';
        n.p = null;
        n.d = Infinity;
    }

    s.c = 'gray';
    s.p = null;
    s.d = 0;
    Q.enqueue(s);
    // end init

    while (!Q.isEmpty()) {
        const u = Q.dequeue();
        u.adj.forEach(node => {
            if (node.c === 'white') {
                const distance = u.d + 1;
                if (distance === max) {
                    count++;
                }
                else if (distance > max) {
                    max = distance;
                    count = 1;
                }
                node.d = distance;
                node.c = 'gray';
                node.p = u;  
                Q.enqueue(node);
            }
        })
        u.c = 'black';
    }
    return count;
}

// const res3 = BFS_MAX(graph, nodeA);
// console.log(res3);




// la DFS non usa una pila come struttura dati di appoggio!
function DFS(G: TGraph) {

    let counter = 1;
    // const stack = generateStack();
    const nodes = getNodes(G);

    for (const n of nodes) {
        n.c = 'white';
        n.p = null;
        n.start = null;
        n.end = null;
    }

    for (const n of nodes) {
        if (n.c === 'white') {
            dfs_visit(G, n);
        }
    }

    function dfs_visit(G: TGraph, s: INode) {
        counter++;
        s.start = counter;
        s.c = 'gray';
        s.adj.forEach(node => {
            if (node.c === 'white') {
                node.p = s;
                dfs_visit(G, node);
            }
        })
        s.c = 'black';
        counter++;
        s.end = counter;
    }

    return G;

}


const res4 = DFS(graph);
console.log(res4);






// al momento non funziona
function DFS2(G: TGraph) {

    let counter = 1;
    const stack = generateStack();
    const nodes = getNodes(G);

    for (const n of nodes) {
        n.c = 'white';
        n.p = null;
        n.start = null;
        n.end = null;
    }

    const s = nodes[0];
    s.c = 'gray';
    s.p = null;
    s.start = counter;
    stack.push(s);

    while (!stack.isEmpty()) {
        const u: INode = stack.pop();
        u.adj.forEach(node => {
            if (node.c === 'white') {
                counter++;
                node.start = counter;
                node.c = 'gray';
                node.p = u;
                stack.push(node);
            }
        })
        u.c = 'black';
        counter++;
        u.end = counter;
    }

    return G;

}


const res5 = DFS2(graph);
console.log(res5);

