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
    var plus = 0;
    var nom = null;

for (i=0; i<arr.length; i++){
    if (arr[i].length>plus) {
        plus = arr[i].length
        nom = arr[i]
    }
}
if (nom !==null) {
    return nom;
}else {
    return false;
}

  /*
    Essaye de maintenir un code propre (tabulation, espace, ...)
    tu devrai d'adord renvoyer false si le array est vide

    ensuite parcourir ton array (regarde 'for of' || 'for in')
    Tu verifie si c'est une string, et si sa longueur est sup tu stock dans une var global
    tu retourne la var global
  */

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

}
