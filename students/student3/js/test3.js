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

for (var i=str.length; i>=0; i--){
    if (str[i]=="."){
        var j= str.slice(i+1,str.length);
        console.log(j);
        return j;
    }
}
return false;

// Ca fonctionne mais tu te complique la vie
// Tu devrait utiliser la function split
// array = string.split(caractere)

/*
  Tu split par le caractere lié a l'extension "."
  Tu verifie si le array a la longueur suffisante (a t'il été split ?)
  Et tu retourne le dernier elements de ton array
*/
}
