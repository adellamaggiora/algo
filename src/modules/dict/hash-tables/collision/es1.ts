import { utils } from '../../../../utilities/utils';

// table size
const m = 11
// primary hash function
const h = k => k % m;
// secondary hash function (double hasing)
const h2 = k => 1 + k % (m - 1);

/**
 * 
 * @param k Key
 * @returns Collision strategy resolution
 * i is the attempt iteration
 */
const manageCollision = k => {
    return {
        // h(h(k) + i)
        linearProbing: i => h(h(k) + 1),
        // h(h(k) + i^2)
        quadraticProbing: i => h(h(k) + utils.square(i)),
        // h(k) + i h2(k)
        doubleHashing: i => h(k) + i * h2(k)
    }
}

const collision1 = manageCollision(34);

const result = collision1.quadraticProbing(3);

console.log(result);