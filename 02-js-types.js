// boolean
true;
false;

// Operadores lógicos
// or, and, not (ou, e, não/inverso)

const exp1 = 1 < 10; // true
const exp2 = 4 > 8;  // false

// OR: ||
console.log('OR: ', exp1 || exp2);

true || true || true || false     // true
true || false || false || false   // true
false || false || false || false  // false

// AND: &&
console.log('AND:', exp1 && exp2);

true && true && true && true      // true
true && true && true && false     // false
false && false && false && true   // false

// short-circuit
exp2 || console.log('curto-circuito do OU');
exp1 && console.log('curto-circuito do E');

// NOT: !
console.log('NOT:', !exp2);

console.log('-- undefined & null --')
// undefined
let nome;
console.log(nome);

// null
nome = null;
console.log(nome);

console.log('-- truthy & falsy --')
// Truthy & Falsy
const cond = '0';
if (cond) {
  console.log('truthy!');
} else {
  console.log('falsy!');
}

console.log('-- imutabilidade --');
// Imutabilidade
let city = 'são paulo';
console.log(city);
city[0] = 'S';
console.log(city);

city = 'Goiaba';
console.log(city);

