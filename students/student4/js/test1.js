/*
 * Tests
 */
var container = document.getElementById('container');
if (
  doubleInt(4) === 8
  && doubleInt(-4) === -8
  && doubleInt(0) === 0
) {
  container.textContent = 'Yeaaah';
  container.className = 'success';
}
else {
  container.textContent = 'Nope';
  container.className = 'error';
}


/*
 * Exo1
 *
 * int est un entier
 * Le doubler, et le retourner
 */
function doubleInt(int) {
    var int = int * 2;
     console.log(int);
    // console.log(typeof int);
    return int;
}
 console.log(doubleInt());

 /*
    Tu obtient le resultat attendu
    Tu peut simplifier ta syntax : return int * 2;

    et pense à nettoyer ton code, notamment tes logs

  */