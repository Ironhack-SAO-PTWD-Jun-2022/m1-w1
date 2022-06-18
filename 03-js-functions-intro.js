// DRY - Don't Repeat Yourself

// declarar uma função
function functionName(parameters) {
  // bloco de código para ser executado.
}

// invocar uma função
functionName('argumento');

// function comedorDeGoiaba (goiaba1, goiaba2) {
//   // .. eu q decido o q a função faz
//   return `Eu comi a ${goiaba1} e ${goiaba2}`;
// }

/**
 * NOMEANDO UMA FUNÇÃO
 * - descritiva
 * - dica: usar verbo
 * - camelCase
 */

// function sayHello() {
//   console.log('Hello, Ironhackers!');
// }

// sayHello();

function sayHelloWalison() {
  console.log('Hello, Walison!');
}

function sayHelloJoao() {
  console.log('Hello, João!');
}

sayHelloWalison();
sayHelloJoao();

// parâmetros
// function sayHello(name) {
//   console.log(`Hello, ${name}!`);
// }

// sayHello('Gabriel');
// sayHello('Jandson');
// sayHello('Caio');
// sayHello('Goiaba');

function sayHi(name1, name2, name3) { // <-- parâmetros
  console.log(`Hi ${name1}, ${name2} and ${name3}`);
}

sayHi('Helio', 'Renata', 'Daniel', 'Goiaba'); // <-- argumentos

// return
console.log('-- return --');

function sayHello(name) {
  return `Hello, ${name}`;
}

const result = sayHello('Gabriel');
console.log('com return:', result);

// múltiplos returns
console.log('-- múltiplos returns --')
function printName(name) {
  if (name.length === 0) {
    return 'Please provide a name.';
    // console.log('Please provide a name.');
  }
  return `Name is ${name}`;
}

console.log(printName('Helio'));
console.log(printName(''));

// retornar múltiplos dados
console.log('-- retornando um objeto --');

function getUserInfo(firstName, lastName) {
  const userInfo = {
    username: firstName,
    surname: lastName
  }

  return userInfo;
}

const userData = getUserInfo('Walison', 'Abram');
console.log(userData);
console.log(`Hello ${userData.username} ${userData.surname}!`);

console.log('-- retornando um array --');
function getFavorites(fav1, fav2, fav3) {
  const favorites = [ fav1, fav2, fav3 ];
  return favorites;
}

const favoriteFruits = getFavorites('Goiaba', 'Maracujá', 'Manga');
console.log(favoriteFruits);
console.log(`My favorite fruits are: ${favoriteFruits[0]}, ${favoriteFruits[1]} and ${favoriteFruits[2]}`)

/**
 * Código reutilizável
 * Abstração
 * Separação das preocupações: Separation of Concerns
 * princípio da responsabilidade única
 */

// refatoração
console.log('-- refatoração --');
function average(arrayNumbers) {
  // se não tiver nenhum número retorno undefined
  if (!arrayNumbers.length) return;
  
  // faz a soma
  let sum = 0;
  for(let i = 0; i < arrayNumbers.length; i += 1){
    sum += arrayNumbers[i];
  }

  // faz e retorna a média
  return sum / arrayNumbers.length;
}

const numbers = [ 5, 3, 190, 12837127896418275412, 78 ];
console.log(average(numbers));

function sum(arrayNumbers) {
  if (!arrayNumbers.length) return;

  let total = 0;
  for(let i = 0; i < arrayNumbers.length; i += 1){
    total += arrayNumbers[i];
  }

  return total;
}

function avg(arrayNumbers) {
  if (!arrayNumbers.length) return;

  return sum(arrayNumbers) / arrayNumbers.length;
}

console.log(avg(numbers));