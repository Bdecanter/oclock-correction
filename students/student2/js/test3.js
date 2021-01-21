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
  var separator = '.';
  // Définir ton extension dans une variable est utile si :
  // Tu compte la réutiliser autre part
  // Si tu gagne du temps quand tu l'utilise
  // var getExtension = str.split("."); 
  var getExtension = str.split(separator);

  // Plus simple de retourner la derniere valeur de ton array directement
  // Tu alourdi ton code + création d'un nouvelle array... (shallow copy)
  var extension = getExtension.slice(-1)[0];
  
  if (getExtension.length === 1) return false;
  
  // Retourne directement ton extension en utilisant l'index - 1
  // return getExtension[getExtension.length - 1];
  return extension;
}
