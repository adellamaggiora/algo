const swap = (A: number[], index1: number, index2: number) => {
    const tmp = A[index1];
    A[index1] = A[index2];
    A[index2] = tmp
}

const square = i => Math.pow(i, 2);


export const utils = {
    swap,
    square
}