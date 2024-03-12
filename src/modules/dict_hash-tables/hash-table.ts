import { utils } from "../../utilities/utils";
import * as R from 'ramda';

enum ECollisionResolution {
    LinearProbing = 'linearProbing',
    QuadraticProbing = 'quadraticProbing',
    DoubleHashing = 'doubleHashing'
}

// numero primo
const m = 11
const hashTable = new Array(m).fill(null);
// key universe
const keys = [33, 10, 24, 14, 16, 13, 23, 31, 18, 11, 7];
// primary hash function
const h1 = k => k % m;
// secondary hash function (double hasing)
const h2 = k => 1 + k % (m - 1);

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
        // h(k) = (h'(k) + 3i + i^2) mod m
        linearProbing: i => (h1(k) + i) % m,
        // h1(k) + i^2
        quadraticProbing: i => (h1(k) + 3*i + utils.square(i)) % m,
        // h1(k) + i * h2(k)
        doubleHashing: i => (h1(k) + i * h2(k)) % m
    })


    for (const k of keys) {
        const handleCollision = collisionManager(k)[collisionResolution];
        for (let i = 0; i < hashTable.length; i++) {
            const hash = handleCollision(i);
            console.log(`h(${k}) = ${hash} tentativo ${i}`);
            if (hashTable[hash] === null) {
                hashTable[hash] = k;
                console.log(`INSERIMENTO DELLA CHIAVE ${k} ALL'INDICE ${hash}`);
                break;
            }
            else {
                console.log('COLLISIONE');
            }
        }
    }

}


const logger = (collisionResolution: ECollisionResolution) => {
    console.log(`h1 function:`);
    console.table(keys.map(k => `h1(${k}) = ${h1(k)}`));

    if (collisionResolution === ECollisionResolution.DoubleHashing) {
        console.log(`h2 function:`);
        console.table(keys.map(k => `h2(${k}) = ${h2(k)}`));
    }

    hasing(m, keys, h1, h2, collisionResolution);
    console.log(`Hash table with collision resolution: ${collisionResolution?.toUpperCase()}`);
    console.log(`Load factor (m/n): ${m / hashTable.length}`);

    console.table(hashTable);
}


logger(ECollisionResolution.QuadraticProbing);


