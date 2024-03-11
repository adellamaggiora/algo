const tree = {
    val: 100,
    sx: {
        val: 90,
        sx: {
            val: 10,
            sx: null,
            dx: null
        },
        dx: {
            val: 1,
            dx: null,
            sx: null
        }
    },
    dx: {
        val: 12,
        sx: {
            val: 5,
            sx: null,
            dx: null
        },
        dx: {
            val: 7,
            sx: null,
            dx: null
        }
    }
}


function trovaMin(t: any): any {
    if (!t?.dx || !t.sx) {
        return t.val;
    }
    return Math.min(t.val, trovaMin(t.sx), trovaMin(t.dx))
}

function contaNodi(t: any, count = 0): any {
    if (!t?.dx || !t.sx) {
        return 1;
    }
    return contaNodi(t.sx, count + 1) + contaNodi(t.dx, count + 1) + 1;
}


function contaFoglie(t: any): any {
    if (!t) {
        return 0;
    }
    if (!t.dx || !t.sx) {
        return 1;
    }
    return contaFoglie(t.sx) + contaFoglie(t.dx);
}


function altezza(t: any): any {
    if (!t?.dx || !t.sx) {
        return 0;
    }
    const altezzaSx = altezza(t.sx);
    const altezzaDx = altezza(t.dx)
    return Math.max(altezzaSx, altezzaDx) + 1;
}

// un albero binario è completo se ogni nodo interno ha esattamente due nodi figli non nulli
function completo(t: any): any {
    if (!t?.dx && !t.sx) {
        return true;
    }
    if (!t.dx || !t.sx) {
        return false;
    }
    return completo(t.sx) && completo(t.dx);
}

// Un albero è completamente bilanciato se tutte le foglie sono 
// sullo stesso livello (altezza) e ogni nodo interno ha due figli.
function completamenteBilanciato(t: any): any {
    //@todo
}


// console.log(findMin(tree))
// console.log(contaNodi(tree))
// console.log(contaFoglie(tree))
// console.log(altezza(tree))
// console.log(completo(tree))
// console.log(completamenteBilanciato(tree))
