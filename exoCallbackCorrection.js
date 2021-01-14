

// En utilisant les fonctions callback, ecrire une fonction qui permet de
// determiner le nombre d'occurrence d'une sous-chaıne de caractere ch
// dans une chaıne de caractere str.
// ch = ab
// str = abbbaaaabaaabb
// la fonction retourne 3.

var searchElement2 = function (data, callback) {
    // Déclaration d'une variable str et initialisation par l'objet data passé en paramètre
    // Dans notre exemple, data.string (exo ->  var str = "abbbaaaabaaabb";)
    var str = data.string;
    // Déclaration et initialisation d'une variable count à 0, nous permettant de stocker le nombre d'occurences
    var count = 0;
    // Déclaration d'une variable pos
    // Appel de La méthode indexOf(élémentRecherché) prenant en paramètre un élément 
    // Ici, data.filtre (exo ->  var ch = "ab";)
    // nous permettant de renvoyer le premier indice de cet élément donné dans str.
    var pos = str.indexOf(data.filtre);
    // Si on trouve la valeur, on affiche le nombre'occurences
    // Sinon on affiche le message d'erreur
    if (pos != -1) {
        // Tant qu' on trouve la valeur et que la position est differente de -1, on rentre dans la boucle
        // sinon quand pos sera egal à -1, cela voudra dire que l'on aura fini de parcourir la chaîne
        // et que l'on n'aura pas trouve la valeur voulue.
        while (pos != -1) {
            // Quand une occurence est trouve dans le chaine
            // On incremente count, ici le nombre d'occurence de 1
            count++;
            // Rappel de La méthode indexOf(élémentRecherché, indiceDébut) prenant en paramètre un élément
            // et un indice de début, ici pos + 1  indice à partir de la variable pos initialisée en dehors de la boucle
            // Quand une occurence est trouve dans le chaine
            // On incremente aussi pos, ici l'indice dans la chaîne
            pos = str.indexOf(data.filtre, pos + 1);
        }
        return callback(null, count);
    }
    return callback('Element ' + data.filtre + ' non retrouve dans ' + data.string);
};
var str = "abbbaaaabaaabb";
var ch = "ab";
var data = { string: str, filtre: ch };
searchElement2(data, function (err, result) {
    if (err)
        console.error("erreur :" + err);
    else
        console.log(ch + " existe " +
            result + " fois ");
});