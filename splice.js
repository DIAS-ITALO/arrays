/* array.splice(indice, delete, nomes a adicionar) */

//               -5       -4        -3         -2        -1
//                0        1         2          3         4
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Julia'];


const removidos = nomes.splice(1, 1, 'Murilo', 'Beatriz');
console.log (nomes, removidos)

/* const removidos = nomes.splice(5, 0, 'Ana');
console.log(nomes); */

/* const removidos = nomes.splice(0, 0, 'Joaquim');
console.log(nomes); */

/* const removidos = nomes.splice(3, 0, 'Luiz');
console.log(nomes, removidos); */