// si considerino k liste ordinate contenenti complessivamente n elementi

const k = 3;

const L1 = [3, 4, 15, 45, 50];
const L2 = [2, 5, 10, 30];
const L3 = [0, 11, 35];

// progettare un algoritmo che fonda le k liste ordinate in un unico
// insieme oridnato di dimensione n e discuterne la complessità in tempo

// Lout = [0, 2, 3, 4, 5, 10, 11, 15, 30, 35, 15, 50]


// considerazione: se fondo le liste insieme non ho la garanzia che la lista finale sia oridnata!
// idea: visto che le liste di partenza sono già ordinate posso fare il mergeSort sulle 3 liste?


