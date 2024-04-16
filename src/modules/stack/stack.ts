import * as R from 'ramda';
// pila: Stack, LIFO (last in, first out)
// // API
// isEmpty
// push O(1)
// pop O(1)
// top O(1)

export function generateStack() {
    // indice del primo elemento libero nell'array
    let topIndex = 0;
    let stack = [];

    function isEmpty() {
        if (topIndex <= 0) {
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
            console.log('empty stack! operation not peritted');
            return;
        }
        const el =  R.clone(stack[topIndex - 1]);
        stack[topIndex - 1] = null;
        topIndex--;
        return el
    }

    function top() {
        return stack[topIndex - 1];
    }

    return {
        isEmpty,
        push,
        pop,
        top
    }
}

