/*
 * Tests
 */
var container = document.getElementById('container');
if (
  getExtension('test1.css') === 'css'
  && getExtension('jquery.min.js') === 'js'
  && getExtension('.eslintrc') === 'eslintrc'
  && getExtension('monfichier') === false
) {
  container.textContent = 'Yeaaah';
  container.className = 'success';
}
else {
  container.textContent = 'Nope';
  container.className = 'error';
}


/*
 * Exo3
 *
 * str est une string
 * Retourner l'extension de fichier.
 * Par exemple index.html => html
 */
function getExtension(str) {
  // Tu as une erreur de syntax (pense a regarder ta console)

  /*
    Tu ne peut faire une liste dans ce cas présent, 
    si on ajoute un nouvelle appel de function ex: getExtension("super.py"),
    tu doit modifier ta function pour ajouter cet extension...

    Et la method lastIndexOf renvoie -1 si la chaine de caractere n'est pas trouvé,
    et renvoi la position dans ta string si il est trouvé.

    Tu doit utiliser la method split (voir sur MDN)
  */
    var str = str.lastIndexOf('css','js','eslintrc','eslintrc');
    console.log(str);
    return str;
}
