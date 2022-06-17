// declaração / statement

// if...else
let condition = true;

if (condition) {
  // se a condition for true, executa esse trecho de código;
} else { // else é opcional
  // se a condition não for true, executa esse trecho de código;
}

const age = 50;

if(age < 18) {
  // se idade < 18, executar esse trecho
  console.log('Você não pode beber!');
} else if (age >= 50){
  // se idade >= 18 E idade >= 50, execute esse trecho.
  console.log('Você pode beber o drink especial!');
} else {
  // se nenhuma condição for verdadeira, execute esse trecho.
  console.log('você pode beber!');
}

const num1 = 15;
const num2 = 15;

if (num1 === num2) {
  console.log('os números são iguais');
} else {
  if (num1 > num2) {
    console.log('o número 1 é maior q o número 2');
  } else {
    console.log('o número 2 é maior q o número 1');
  }
}

const expressao = 'monica';
switch (expressao) {
  case 'monica':
    // faça esse trecho;
    break;
  case 'cebolinha':
    // faça esse trecho;
    break;
  default:
    // faça esse trecho;
}

const character = 'Jon Snow';
let house = '';

// if (character === 'Khal Drogo') {
//   house = 'Dothraki Horselord';
// } else if (character === 'Daenerys') {
//   house = 'Targaryen';
// } else if (character === 'Jon Snow' || character === 'Sansa' || character === 'Arya') {
//   house = 'Stark';
// } else if (character === 'Cersei' || character === 'Tyrion' || character === 'Ser Jaime') {
//   house = 'Lannister';
// } else {
//   house = 'outra';
// }

switch(character) {
  case 'Khal Drogo':
    house = 'Dothraki Horselord';
    break;
  case 'Daenerys':
    house = 'Targaryen';
    break;
  case 'Jon Snow':
  case 'Sansa':
  case 'Arya':
    house = 'Stark';
    break;
  case 'Cersei':
  case 'Tyrion':
  case 'Ser Jaime':
    house = 'Lannister'
    break;
  default :
    house = 'outra';
}

console.log(`Seu personagem é da casa ${house}`);

// LOOPS / Laços
// while -> enquanto

// while (condition) {
//   // faça esse trecho enquanto condition for true
// }

let i = 101;
while (i <= 100) {
  console.log(i);
  i = i + 3; // i += 3;
}
console.log('sai do while');

// for
// for (inicializador; condicao; expressaoFinal) {
//   // trecho a ser executado enquanto condicao for verdadeira
// }

for (let i = 50; i <= 100; i += 1) {
  console.log(i);
}

console.log('sai do for');

// do.. while
// do {
//   // execute esse trecho ao menos 1 vez
// } while (condition)

// FOR...OF
const palavra = 'amsterdan do brasil';

for (let letra of palavra) {
  console.log(letra);
}
console.log('-- x --')

for (let i = 9; i < palavra.length; i += 1){
  console.log(palavra[i]);
}

console.log('-- BREAK & CONTINUE --')
// break
for (let i = 0; i < 100; i += 1){
  if (i === 5) {
    break;
  }
  console.log(i);
}

// continue
for (let i = 0; i < 100; i += 1){
  if(i === 5) {
    continue;
  }
  console.log(`o número é ${i}`);
}