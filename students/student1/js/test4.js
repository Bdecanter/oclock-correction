/*
 * Tests
 */
var container = document.getElementById('container');
if (
  getLongestString(['coucou', 'hello', 'bonjour']) === 'bonjour'
  && getLongestString(['css', 'html', 'js', 'php']) === 'html'
  && getLongestString([]) === false
  && getLongestString(['un', 2, 'trois', 4, 'cinq']) === 'trois'
) {
  container.textContent = 'Yeaaah';
  container.className = 'success';
}
else {
  container.textContent = 'Nope';
  container.className = 'error';
}


/*
 * Exo4
 *
 * arr est un array
 * Retourner la chaine la plus longue de l'array
 */
function getLongestString(arr) {

   var result = arr[0];

   // Tu peut raccourcir : if (arr.length === 0) return false;
   if (arr.length === 0) {

      return false;
   }

   // Tu peut utiliser 'for of' afin de parcourir ton array et recuperer la propriété.
   // Ou utiliser 'for in' et utiliser l'index avec ton array : arr[index]
   // Et tu doit verifier si ta var est bien une string

   /* 
      var result = '';

      if (arr.length === 0) return false;

      for(var res of arr) {
         if(typeof res === 'string') {
            if(result.length < res.length) {
               result = res;
            }
         }
      }

      return result;
   */

   for (var index = 1; index < arr.length; index++) {

      if (result.length < arr[index].length) {

         result = arr[index];
      }
   }
   return result;
}
