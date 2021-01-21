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
  
   var rep = str.split('.')
   var index = rep.length - 1;

  // Tu peut verifier la longeur du array directement
  // if (rep.length === 1)
   if ( str.lastIndexOf('.') == -1){

      return false;
   }
  //  Pas besoin de else si dans ton if tu fait un return.
   else {

      console.log(rep[index]);
      return (rep[index]);
   }

  // retourn directement ton resultat :
  // return rep[index];
  // ou
  // return rep[rep.length - 1]; et supprimer la ligne 30
}
