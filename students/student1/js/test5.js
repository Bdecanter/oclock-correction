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
function sum(arr) {

   var result = 0;

   if (arr.length === 0) {
      console.log("valeur renvoyée :"+result);
      return result;
   }

   for (var i = 0; i < arr.length; i++) {

      // Tu ignore les valeur qui ne sont pas des nombres, mais tu as des array de nombre à traiter (objets).
      // Regarde bien le nom du challenge... il est explicite :)

      if (isNaN(arr[i])) {
         console.log("valeur ignorée :"+arr[i]);
         i++;
      }
      if (!isNaN(arr[i])) {
         // tip : pour ajouter une valeur a une variable
         // peut s'ecrire result += arr[i]
         result = result + arr[i];
      }
   }
   console.log("resultat renvoyée : "+result);
   return result;
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