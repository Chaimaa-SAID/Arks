let ArraySearchB = [-3, 2, 4, 5, 9, 16, 1 , 25];
let y = 2;

let inf = 0;
let sup = ArraySearchB.length -1 ;
let resultat = - 1;

while (inf <= sup) {
    let mil = Math.floor(inf + (sup - inf) / 2);

    if (ArraySearchB[mil] == y) {
        resultat = mil;
        break;
    } else if (ArraySearchB[mil] < y) {
        inf = mil + 1;
    } else {
        sup = mil - 1;
    }
}

if (resultat == -1) {
    console.log("(Binary Search) La valeur recherchée ne se trouve pas dans le tableau");
} else {
    console.log("(Binary Search) La valeur "+ y + " se trouve à la position " +resultat);}