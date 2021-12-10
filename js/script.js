/*
SNACK 1
Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
Calcola quanto pesano tutte le zucchine.
*/
/*
const zucchine = [
    {
        varieta: 'trombetta',
        peso: 1,
        lunghezza: 10
    },
    {
        varieta: 'trombetta',
        peso: 0.3,
        lunghezza: 20
    },
    {
        varieta: 'trombetta',
        peso: 1.5,
        lunghezza: 10
    },
    {
        varieta: 'trombetta',
        peso: 0.5,
        lunghezza: 20
    },
    {
        varieta: 'trombetta',
        peso: 0.5,
        lunghezza: 10
    },
    {
        varieta: 'trombetta',
        peso: 0.5,
        lunghezza: 10
    },
    {
        varieta: 'trombetta',
        peso: 0.5,
        lunghezza: 20
    },
    {
        varieta: 'trombetta',
        peso: 0.5,
        lunghezza: 10
    },
    {
        varieta: 'trombetta',
        peso: 0.5,
        lunghezza: 10
    },
    {
        varieta: 'trombetta',
        peso: 0.5,
        lunghezza: 10
    }
];

let sum = 0;

for (let index = 0; index < zucchine.length; index++) {
    const element = zucchine[index];
    //mostro le varie zucchine
    console.log(element);

    //sommo il peso di ogni zucchina
    sum += element.peso;
}
console.log(sum);
*/

/*
SNACK 2
Crea 10 oggetti che rappresentano una zucchina.
Dividi in due array separati le zucchine che misurano meno o più di 15cm.
Infine stampa separatamente quanto pesano i due gruppi di zucchine.
*/

/*
let sumGrandi = 0;
let sumPiccole = 0;
let zucchineGrandi = [];
let zucchinePiccole = [];

for (let index = 0; index < zucchine.length; index++) {
    const element = zucchine[index];
    //mostro la lunghezza delle varie zucchine
    console.log(element);

    if (element.lunghezza > 15){
        //sommo il peso di ogni zucchina grande
        zucchineGrandi.push(element);
        sumGrandi += element.peso;
    } else {
        //sommo il peso di ogni zucchina piccola
        zucchinePiccole.push(element);
        sumPiccole += element.peso;
    }
    
    
}
//stampo i due pesi
console.log('Le zucchine più piccole pesano ' + sumPiccole + ' kg');
console.log('Le zucchine più grandi pesano ' + sumGrandi + ' kg');
*/

/*
SNACK 3
Scrivi una funzione che fonda due array (aventi lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall’altro
es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].
*/

letters = ['a', 'b', 'c'];
numbers = [1, 2, 3];

mergeArray = sum(letters, numbers);
console.log(mergeArray);

function sum(firstArray, secondArray){
    let thirdArray = [];
    for (let index = 0; index < firstArray.length; index++) {
        const element = firstArray[index];
        const secondElement = secondArray[index];

        thirdArray.push(element, secondElement);
    }
    return thirdArray;
}