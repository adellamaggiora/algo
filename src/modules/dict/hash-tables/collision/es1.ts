import { utils } from '../../../../utilities/utils';

const hashTable = new Array(11).fill(null);
// key universe
const keys = [35, 83, 57, 26, 15, 63, 97, 46];
// primary hash function
const h = k => k % hashTable.length;
// secondary hash function (double hasing)
const h2 = k => 1 + k % (hashTable.length - 1);

/**
 * 
 * @param hashTable 
 * @param keys 
 * @param h 
 * @param h2 
 * @param collisionResolution
 */
const hasing = (hashTable, keys, h, h2, collisionResolution) => {

    const collisionManager = k => ({
        // h(k) + i
        linearProbing: i => (h(k) + i) % hashTable.length,
        // h(k) + i^2
        quadraticProbing: i => (h(k) + utils.square(i)) % hashTable.length,
        // h(k) + i h2(k)
        doubleHashing: i => (h(k) + i * h2(k)) % hashTable.length
    })


    for (const k of keys) {
        const handleCollision = collisionManager(k)[collisionResolution];
        for (let i = 0; i < hashTable.length; i++) {
            const hash = handleCollision(i);
            if (hashTable[hash] === null) {
                hashTable[hash] = k;
                break;
            }            
        }   
    }

}

hasing(hashTable, keys, h, h2, 'linearProbing');


console.log(hashTable);


