var searchElement = function(data, callback){
    var nbreOccurence = 0;
    var resultat = data.str.indexOf(ch);

    while(resultat != -1){
    nbreOccurence++;
    resultat = data.str.indexOf(ch, resultat+1);
    } 
    return callback(null, nbreOccurence);
}


var str = 'abracadabra';
var ch = 'ab';
var data = {mot: str, filtre: ch};

searchElement(data, function (err, result) {
    if (err)
        console.error("erreur :" + err)
    else
        console.log("Il y a" + nbreOccurence)
});