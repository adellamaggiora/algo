let t1 = {
    key: 1,
    left: {
        key: 2,
        left: {
            key: 4,
            left: {
                key: 8,
                left: null,
                right: null
            },
            right: {
                key: 9,
                left: null,
                right: {
                    key: 10,
                    left: null,
                    right: null
                }
            }
        },
        right: {
            key: 5,
            left: {
                key: 11,
                left: null,
                right: null
            },
            right: null
        }
    },
    right: {
        key: 3,
        left: {
            key: 6,
            left: null,
            right: {
                key: 12,
                left: null,
                right: {
                    key: 13,
                    left: null,
                    right: null
                }
            }
        },
        right: {
            key: 7,
            left: null,
            right: {
                key: 14,
                left: {
                    key: 15,
                    left: null,
                    right: null
                },
                right: null
            }
        }
    }
};

let t2 = {
    key: 5,
    left: {
        key: 2,
        left: null,
        right: null
    },
    right: {
        key: 3,
        left: null,
        right: null
    }
}



function contaNodi(tree: any) {
    if (!tree) {
        return 0;
    }
    if (tree.left === null && tree.right === null) {
        return 1
    }
    return contaNodi(tree.left) + contaNodi(tree.right) + 1;
}

function sum(t) {
    if (t === null) return 0
    return sum(t.left) + sum(t.right) + t.val
}


function isSumTree(tree: any) {
    if (!tree || (!tree.left && !tree.right)) {
        return true;
    }
    if (sum(tree.left) + sum(tree.right) === tree.key) {
        return isSumTree(tree.left) && isSumTree(tree.right);
    }
    return false;
}

console.log(`isSumTree: ${isSumTree(t2)}`)