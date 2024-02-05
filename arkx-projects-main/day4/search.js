
function rechercheLineaire(tab, nbr) {
    var indices = [];
    
    for (var i = 0; i < tab.length; i++) {
        if (tab[i] === nbr) {
            indices.push(i);
        }
    }

    return indices;
}

function affiche_indice(){


    Tableau = [5, 2, 8, 7, 5, 1, 6, 2, 9, 2];
    nombre = 2;
    indices = rechercheLineaire(Tableau, nombre);
   if (indices.length > 0) {
       console.log(indices);
   }
}
affiche_indice();
    