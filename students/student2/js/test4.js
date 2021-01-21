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
  if (arr.length === 0) return false;
  
  /*
    L'idée de reduire ton array est une possibilité intéressante, un peu verbeuse
    Et le fait de convertir chaque entry en String.
    Si je veut uniquement que les String soient comparés ?

    Dans l'idée, tu doit retourner la chaine (string) la plus longue.
    Une simple boucle for (for of || for in) fait largement le taff,
    Et une condition si typeof valeur !== string
  */

  var longuest = arr.reduce(function(a, b) {
    if (typeof a === 'number') a = String(a);
    if (typeof b === 'number') b = String(b);
    return a.length > b.length ? a : b;
  }, '');  



  return longuest;
}
