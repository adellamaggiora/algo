// una sottosequenza di una stringa è una sequenza di caratteri ottenuta rimuovendo zero o più caratteri
// dalla stringa originale, mantenedo l'ordine relativo dei caratteri rimanenti

// la più lunga sottosequenza tra 2 stringhe è:
// caso 1: se X(n) === Y(m) -> LCS = LCS(Xn-1, Ym-1) concat X[n]
// caso 2: se X(n) !== Y(m) -> LCS = max(LCS(Xn-1, Ym), LCS(Xn, Ym-1))
// caso base la stringa vuota è LCS di qualsiasi stringa

// n è la lunghezza della stringa X, m la lunghezza della stringa Y
const lcsLength = (X: string, Y: string, n: number, m: number, memoMatrix: number[][]): any => {
    if (n === 0 || m === 0) {
        return 0;
    }
    if (X[n] === Y[m]) {
        return lcsLength(X, Y, n - 1, m - 1, memoMatrix) + 1;
    }
    memoMatrix[n][m] = Math.max(lcsLength(X, Y, n - 1, m, memoMatrix), lcsLength(X, Y, n, m - 1, memoMatrix));
    return memoMatrix[n][m];

}

const X = 'pappax';
const Y = 'sappaz';
// LCS -> appa (length: 4)

const memo = new Array(6).fill(new Array().fill(-1));
console.log(`length of lcs("${X}", "${Y}"): ${lcsLength(X, Y, 5, 5, memo)}`);
