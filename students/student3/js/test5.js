/*
 * Tests
 */
var container = document.getElementById('container');
if (
  sum([1, 2, 3]) === 6
  && sum(['un', 2, 'trois', 4, 'cinq']) === 6
  && sum([]) === 0
  && sum([1, [2, 3, [4, 5], 6], 7, [8, 9]]) === 45
) {
  container.textContent = 'Yeaaah';
  container.className = 'success';
}
else {
  container.textContent = 'Nope';
  container.className = 'error';
}


/*
 * Exo5
 *
 * arr est un array
 * Retourner la somme des nombres contenus dans cet array
 */

/*
  Il m'a été difficile de lire ton code sans l'indenter correctement et sans ajouter d'espace.
  J'ai refacto ta function dans une autre function sum2, mieux ?

  Comme dit dans le dernier comment (ligne 70-72), tu te retrouve a boucler sur boucler sur boucler..
  Créer une function qui parse un array et additionne les nombres.
  Si c'est un nombre -> tu ajoute a ton sum1, SINON, tu appel ta function a l'intérieur de ta seule boucle et tu additionne le resultat.
  Il existe des functions qui facilite la parsing d'object (for in || for of) qui t'évite la labeur d'une boucle for standard
*/
function sum(arr) {
var sum1=0;
for (i=0; i<arr.length; i++){
    if (typeof(arr[i])=="number"){
        sum1+=arr[i];
    }else if (typeof(arr[i])=="string"){
    }
    else if (arr[i].length>0) {
        for (var j= 0; j < arr[i].length;j++) {
            if (arr[i][j].length>0) {
                for (var p= 0; p < arr[i][j].length;p++) {
                    sum1+=arr[i][j][p];
                }}
            else{
                sum1+=arr[i][j];
            }}}}
return sum1;
}

function sum2(arr) {
  var sum1 = 0;

  for (i = 0; i < arr.length; i++){
    // Ici tu peut utiliser === Strictement égal
    if (typeof(arr[i]) == "number") {
        sum1 += arr[i];
    }
    // Ici aussi, mais cette condition est inutile
    else if (typeof(arr[i]) == "string"){
      // Pourquoi ? Si tu n'y fait rien, supprime la.
    }
    // Pourquoi verifier la longueur ? Un petit typeof === 'object' ?
    else if (arr[i].length > 0) {

      for (var j = 0; j < arr[i].length; j++) {

        if (arr[i][j].length > 0) {
          // Si tu avais eu encore un array d'un array d'un array ... 
          // Tu aurai du encore verifier if array alors on boucle
          // Essaie de penser DRY (dont repeat yourself)
          for (var p = 0; p < arr[i][j].length; p++) {
            sum1 += arr[i][j][p];
          }
        }
        else {
          sum1 += arr[i][j];
        }
      }
    }
  }
  return sum1;
}

// Correction :

// function sum(arr) {
//    var resultat = 0
//    if (arr.length === 0) return resultat;

//    for(var entry of arr) {
//       if(typeof entry === 'number') {
//          resultat += entry;
//       }
//       else if(typeof entry === 'object') {
//          resultat += sum(entry)
//       }
//    }
//    return resultat
// }