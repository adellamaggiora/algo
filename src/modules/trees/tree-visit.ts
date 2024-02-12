/**
 *   visite
    -anticipata
    -posticipata
    -simmetrica
 */

const rootNode = {
    key: 1,
    leftChild: {
        key: 2,
        leftChild: {
            key: 4,
            leftChild: null,
            rightSibling: null
        },
        rightSibling: {
            key: 5,
            leftChild: null,
            rightSibling: null
        }
    },
    rightSibling: {
        key: 3,
        leftChild: {
            key: 6,
            leftChild: null,
            rightSibling: null
        },
        rightSibling: {
            key: 7,
            leftChild: null,
            rightSibling: null
        }
    }
};

// Implementazione delle visite di un albero binario

// Visita Anticipata (Pre-order)
function preOrderTraversal(node) {
    if (node === null) {
      return;
    }
    console.log(node.key);
    preOrderTraversal(node.leftChild);
    preOrderTraversal(node.rightSibling);
  }
  
  // Visita in Ordine (In-order)
  function inOrderTraversal(node) {
    if (node === null) {
      return;
    }
    inOrderTraversal(node.leftChild);
    console.log(node.key);
    inOrderTraversal(node.rightSibling);
  }
  
  // Visita Posticipata (Post-order)
  function postOrderTraversal(node) {
    if (node === null) {
      return;
    }
    postOrderTraversal(node.leftChild);
    postOrderTraversal(node.rightSibling);
    console.log(node.key);
  }

postOrderTraversal(rootNode)
  

// divide et impera 3 pezzi, parte destra, parte sinistra, me stesso
