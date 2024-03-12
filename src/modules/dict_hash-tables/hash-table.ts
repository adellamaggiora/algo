import { utils } from "../../utilities/utils";

// numero primo
const m = 11
const hashTable = new Array(m).fill(null);
// key universe
const keys = [35, 83, 57, 26, 15, 63, 97, 46];
// primary hash function
const h = k => k % m;
// secondary hash function (double hasing)
const h2 = k => 1 + k % (m - 1);

/**
 * 
 * @param hashTable 
 * @param keys Key universe
 * @param h Primary hash function
 * @param h2 Secondary hash function (double hashing)
 * @param collisionResolution 'linearProbing', 'quadraticProbing', or 'doubleHashing'.
 */
const hasing = (m, keys, h, h2, collisionResolution) => {

    const collisionManager = k => ({
        // h(k) + i
        linearProbing: i => (h(k) + i) % m,
        // h(k) + i^2
        quadraticProbing: i => (h(k) + utils.square(i)) % m,
        // h(k) + i * h2(k)
        doubleHashing: i => (h(k) + i * h2(k)) % m
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

hasing(m, keys, h, h2, 'linearProbing');


console.log(hashTable);
