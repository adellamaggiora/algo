// coda: FIFO (first in, first out)
// // operazioni
// isEmpty O(1)
// enqueue: coda[tail] = x; tail ++; O(1)
// dequeue O(1)

let fifo = new Array(5).fill(null);

let head = 0;
let tail = 0;


function isEmpty() {
    return tail === head;
}

function dequeue() {
    const result = fifo[head];
    head = (head+1) % fifo.length;
    return result;
}

function enqueue(item: any) {
    fifo[tail] = item;
    tail = (tail+1) % fifo.length;
}

console.log(fifo)
enqueue(2);
enqueue(100);
enqueue(200);
enqueue(300);
enqueue(40);

enqueue(450);

console.log(fifo)