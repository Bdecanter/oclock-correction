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
function flatten(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] instanceof Array) {
      arr.splice.apply(arr, [i,1].concat(arr[i]));
      i--;
    }
  }
  
  return arr;
} 

// Le nom du challenge doit vous parler... Inception
// On creer une function qui additionent les valeurs d'un array.
// Si on trouve un array dans un array (Inception :)), pourquoi ne pas utiliser la meme function ?
function sum(arr) {
  var total = 0;
  var arr = flatten(arr);
  
  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
      total += arr[i];
    }
  }
  
  return total;
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