// problema del taglio delle aste

// si vuole sapere il modo migliore di tagliare le aste, comprate all'ingrosso
// e rivendute a un prezzo P(i) in dollari dove i sono le inches (pollici)

// le lunghezze delle aste sono sempre un numero intero di pollici


// lunghezza i |    1   2   3   4   5   6   7   8   9   10
// prezzo P(i) |    1   5   8   9   10  17  17  20  24  30

// Il problema del taglio delle aste può essere definito nel modo seguente. Data
// un’asta di lunghezza n pollici e una tabella di prezzi P(i) , per i = 1, 2,...,n
// determinare il ricavo massimo R(n) che si può ottenere tagliando l’asta e vendendone
// i pezzi.
// se il prezzo P(n) di un’asta di lunghezza n è sufficientemente
// grande, la soluzione ottima potrebbe essere quella di non effettuare alcun taglio.


// consideriamo un asta lunga 4 pollici se la tagliamo in 2 pezzi da 2 pollici avremo:
// P(2) + P(2) = 5 + 5 = 10 che è una soluzione ottima

// un'asta di lunghezza n può essere tagliata in 2^(n-1) modi differenti
// in quanto si ha un’opzione indipendente di tagliare, o non tagliare
// alla distanza di i pollici dall’estremità sinistra, per i = 1, 2,...,n-1

// asta di lunghezza i = 3

// °---°---°---°

// 1 °---°---°---°
// 2 °---°---°
// 3 °---°
// 4 °---°   °---° 

// 2^(n-1) modi (2 = tagliare/non tagliare, n-1 =distanza di i pollici dall’estremità sinistra,
// per i = 1, 2,...,n-1)

// una soluzione ottima prevede quindi il taglio dell'asta  in k pezzi per 1 <= k <= n
// allora una decomposizione ottima n = i1 + i2 +...+ ik fornisce il ricavo massimo
// R(n) = p1 + p2 +...+ pn


// possiamo esprimere R(n) come = max( P(n), R(1)+R(n-1), R(2)+R(n-2), ... , R(n-1)+R(1) )
// dove P(n) è il prezzo dell'asta intera di lunghezza n, senza tagli, gli altri n-1 argomenti
// corrispondono al ricavo massimo ottenuto facendo un taglio inziale dell'asta in 2 pezzi di 
// dimensione i e n-1 (per i = 1,2,...,n-1) e poi tagliando in modo ottimale gli ulteriori pezzi
// ottenendo i ricavi R(i) e R(n-i) da questi 2 pezzi.

// per risolvere il problema iniziale di dimensione n, NON risolviamo problemi più piccoli
// dello stesso tipo, ma di dimensioni inferiori. Una volta effettuato il primo taglio, 
// possiamo considerare i due pezzi come istanze indipendenti del problema del taglio delle aste.

// IMPORTANTE!
// Diciamo che il problema del taglio delle aste presenta una SOTTOSTRUTTURA OTTIMA
// perchè le soluzioni ottime di un problema incorporano le soluzioni ottime dei sottoproblemi 
// correlati, che possono essere risolti in modo indipendente.

// C’è un modo un po’ più semplice di definire una struttura ricorsiva per il problema del taglio
// delle aste: consideriamo la decomposizione formata da un primo pezzo di lunghezza i tagliato
// dall’estremità sinistra e dal pezzo restante di destra di lunghezza n - i.
// Soltanto il pezzo restante di destra (non il primo pezzo) potrà essere ulteriormente tagliato. 
// Possiamo vedere ciascuna decomposizione di un’asta di lunghezza n in questo modo: un primo pezzo
// seguito da un’eventuale decomposizione del pezzo restante.


// l'algoritmo deve ricevere in input la lunghezza della barra e i prezzi associati alle varie lunghezze

const cutRod = (prices: number[], rodSize: number): number => {
    if (rodSize === 0) {
        return 0;
    }
    let currentMax = -Infinity;

    for (let i = 0; i < rodSize; i++) {
        const innerCutRod = prices[i] + cutRod(prices, rodSize - i - 1);
        currentMax = Math.max(currentMax, innerCutRod);
    }

    return currentMax;
}

// const prices = [1, 5, 8, 9, 7, 17, 17, 20, 24, 30];
// const rodSize = 40;
// console.log(cutRod(prices, rodSize)) 
// costo in tempo O(2^n)


// algoritmo con memoization, approccio top-down
const memoizedCutRod = (prices: number[], rodSize: number): number => {
    const memo = new Array(rodSize).fill(-Infinity);

    const memoizedCutRodAux = (prices: number[], rodSize: number, memo: number []): number => {
        if (memo[rodSize] >= 0) {
            return memo[rodSize]
        }
        let currentMax = 0;
    }

    return memoizedCutRodAux(prices, rodSize, memo);
}

const prices = [1, 5, 8, 9, 7, 17, 17, 20, 24, 30];
const rodSize = 40;