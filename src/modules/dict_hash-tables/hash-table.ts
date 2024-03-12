import { utils } from "../../utilities/utils";

enum ECollisionResolution {
    LinearProbing = 'linearProbing',
    QuadraticProbing = 'quadraticProbing',
    DoubleHashing = 'doubleHashing'
}

// numero primo
const m = 11
const hashTable = new Array(m).fill(null);
// key universe
const keys = [35, 83, 57, 26, 15, 63, 97, 46];
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
        // h(k) + i
        linearProbing: i => (h1(k) + i) % m,
        // h(k) + i^2
        quadraticProbing: i => (h1(k) + utils.square(i)) % m,
        // h(k) + i * h2(k)
        doubleHashing: i => (h1(k) + i * h2(k)) % m
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


console.log(`\n \n h1 function:`);
console.log(keys.map(k => `h1(${k}) = ${h1(k)}`));

console.log(`\n \n h2 function:`)
console.log(keys.map(k => `h2(${k}) = ${h2(k)}`))



const collisionResolution = ECollisionResolution.LinearProbing;
console.log(`\n \n Hash table with collision resolution: ${collisionResolution}`);
hasing(m, keys, h1, h2, collisionResolution);


console.table(hashTable);
