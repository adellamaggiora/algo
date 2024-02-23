import { utils } from '../../../../utilities/utils';

const keys = [35, 83, 57, 26, 15, 63, 97, 46];
const hashTable = new Array(11).fill(null);

// primary hash function
const h = k => k % hashTable.length;
// secondary hash function (double hasing)
const h2 = k => 1 + k % (hashTable.length - 1);

/**
 * 
 * @param k Key
 * @param m The hash table size
 * @returns Collision strategy resolution
 * i is the attempt iteration
 */
const _collisionManager = (m) => (k) => {
    return {
        // h(k) + i
        linearProbing: i => (h(k) + i) % m,
        // h(k) + i^2
        quadraticProbing: i => (h(k) + utils.square(i)) % m,
        // h(k) + i h2(k)
        doubleHashing: i => (h(k) + i * h2(k)) % m
    }
}



const collisionManager = _collisionManager(hashTable.length);


for (const k of keys) {
    const manageCollision = collisionManager(k);
    for (let i = 0; i < hashTable.length; i++) {
        const hash = manageCollision.doubleHashing(i);
        if (hashTable[hash] === null) {
            hashTable[hash] = k;
            break;
        }            
    }   
}

console.log(hashTable);


