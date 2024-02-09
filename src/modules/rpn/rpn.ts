import Stack from 'stack-lifo';

// Notazione Polacca Inversa (Reverse Polish Notation RPN)
// è un linguaggio per le operazioni aritmetiche in cui l'operatore segue gli operandi
// un'espression in RPN non può mai essere ambigua

// 2 3 + -> 2 + 3
// 3 4 1 + / -> 3 / (4 + 1)

//Quando si utilizza la RPN si fa conto di possedere una pila (stack)
// su cui pian piano si accumulano gli operandi: prima si impila il 3, poi il 2. 
//Un operatore invece preleva dalla cima della pila tutti gli operandi
// di cui ha bisogno, esegue l'operazione, e vi rideposita il risultato. 
// L'elemento più in basso è da considerarsi sempre l'operando sinistro. 
// Se l'espressione completa è corretta, alla fine di tutte le operazioni
// sulla pila si avrà un solo elemento, il risultato finale. 

// l'output è la visita posticipata dell'albero di sintassi astratta

// scrivere un calcolatore RPN
const evaluator = (symbol: '+' | '-' | '*' | '/', op1: number, op2: number) => {
    let result: number
    switch (symbol) {
        case '+':
            result = op1 + op2;
            break;
        case '-':
            result = op1 - op2;
            break;
        case '*':
            result = op1 * op2;
            break;
        case '/':
            result = op1 / op2;
            break;
        default:
            break;
    }
    return result;
}

const rpnCalulator = (rpn: string): number => {
    const chars = rpn.split(' ');
    const regex = /[0-9]/;
    const stack = new Stack();

    chars.forEach((char: any) => {
        const isNumber = regex.test(char);
        if (isNumber) {
            stack.push(Number(char));
        }
        else {
            const op1 = stack.pop();
            const op2 = stack.pop();
            const res = evaluator(char, op2, op1);
            stack.push(res);
        }
    })

    return stack.pop()
}

console.log(rpnCalulator('6 4 + 2 /'));