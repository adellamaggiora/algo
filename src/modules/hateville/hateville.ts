// hateville


// quantità massima dei fondi che può essere raccolta?


// sia HV(i) uno dei possibili insiemi di indici da selezionare
// per ottenere una donazione ottimale dalle prime i case di HV (Hateville)
// numerate da 1...n

// HV(n) è la soluzione originale del problema

// HV(i) = max(HV(i-1), {i} U HV(i-2))

// casi base
// HV(0) = insieme vuoto
// HV(1) = {1}


// array dei fondi
const D = [3, 5, 2, 7, 1, 10];

const hateville = (D: number[]) => {
    const DP = [0, D[0]];
    for (let i = 2; i < D.length; i++) {
        DP.push(Math.max(DP[i-1], DP[i-2] + D[i]))
        
    }
    return DP;
}


console.log(hateville(D));
