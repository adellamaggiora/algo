const swap = (A: number[], index1: number, index2: number) => {
    const tmp = A[index1];
    A[index1] = A[index2];
    A[index2] = tmp
}


export const utils = {
    swap
}