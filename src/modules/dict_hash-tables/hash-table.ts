enum ECollisionResolution {
    LinearProbing = 'linearProbing',
    QuadraticProbing = 'quadraticProbing',
    DoubleHashing = 'doubleHashing'
}



// key universe
const keys = [33, 10, 24, 14, 16, 13, 23, 31, 18, 11, 7];
// meglio se numero primo
const m = keys.length;
// primary hash function
const h1 = k => k % m;
// secondary hash function (double hasing)
const h2 = k => 1 + k % (m - 1);

const hashTable = new Array(m).fill(null);

/**
 * 
 * @param m Table size
 * @param keys Key universe
 * @param h1 Primary hash function
 * @param h2 Secondary hash function (double hashing)
 * @param collisionResolution 'linearProbing', 'quadraticProbing', or 'doubleHashing'.
 */
const hasing = (
    m: number,
    keys: number[],
    h1: (k: number) => number,
    h2: (k: number) => number,
    collisionResolution: ECollisionResolution
) => {

    const collisionManager = k => ({
        // h1(k) + i
        linearProbing: i => (h1(k) + i) % m,
        // h1(k) + i^2 //  // h1(k) + 3i + i^2) mod m
        quadraticProbing: i => (h1(k) + 3 * i + Math.pow(i, 2)) % m,
        // h1(k) + i * h2(k)
        doubleHashing: i => (h1(k) + i * h2(k)) % m
    })


    for (let k = 0; k < keys.length; k++) {
        const key = keys[k]
        const handleCollision = collisionManager(key)[collisionResolution];
        if (k === 0) {
            console.log('-----------------------------------------');
            console.log(`HASH FUNCTION: `);
            console.log(handleCollision.toString());
            console.log('-----------------------------------------');
            console.log(`\n`)
        }
        for (let i = 0; i < hashTable.length; i++) {
            const hash = handleCollision(i);
            console.log(`h(${i} ${key}) = ${hash} (tentativo ${i})`);
            if (hashTable[hash] === null) {
                hashTable[hash] = key;
                console.log(`INSERIMENTO DELLA CHIAVE ${key} ALL'INDICE ${hash}`);
                console.log('-----------------------------------------');
                break;
            }
            else {
                console.log('COLLISIONE');
            }
        }
    }

}


const logger = (collisionResolution: ECollisionResolution) => {
    console.log(`h1 function: ${h1.toString()}`);
    console.table(keys.map(k => `h1(${k}) = ${h1(k)}`));

    if (collisionResolution === ECollisionResolution.DoubleHashing) {
        console.log(`h2 function: ${h2.toString()}`);
        console.table(keys.map(k => `h2(${k}) = ${h2(k)}`));
    }

    hasing(m, keys, h1, h2, collisionResolution);

    console.log(`\n`);
    console.log(`Final hash table with collision resolution: ${collisionResolution?.toUpperCase()}`);
    console.log(`Load factor (m/n): ${m / hashTable.length}`);
    console.table(hashTable);
}


logger(ECollisionResolution.QuadraticProbing);


