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
            right: null
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


function contaNodi(tree: any) {
    if (!tree) {
        return 0;
    }
    if (!tree.left && !tree.right) {
        return 1
    }
    return contaNodi(tree.left) + contaNodi(tree.right) + 1;
}

const res = contaNodi(t1);

console.log(res);


// function parita(tree: any) {
//     if (condition) {
        
//     }
// } 