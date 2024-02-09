// pila: Stack, LIFO (last in, first out)
// // API
// isEmpty
// push O(1)
// pop O(1)
// top O(1)

// indice del primo elemento libero nell'array
let topIndex = 0;
let stack = [];

function isEmpty() {
    if (topIndex <=0) {
        return true;
    }
    return false;
}

function push(item: any) {
    stack[topIndex] = item;
    topIndex++;
}

function pop() {
    if (isEmpty()) {
        console.log('empty stack! operatio not peritted');
    }
    stack[topIndex-1] = null;
    topIndex--;
}

function getTop() {
    return stack[topIndex-1];
}

console.log(stack)
push(2)
console.log(stack)
push('hello world')
console.log(stack)
pop()
console.log(stack)
push(212)
console.log(stack)
