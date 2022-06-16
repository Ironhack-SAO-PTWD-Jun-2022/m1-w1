console.log('-- AULA 01: Data Types --');

// dados ou valores primitivos
// dados ou valores não-primitivos

/**
 * number
 * string
 * null
 * undefined
 * boolean
 * symbol <-- ES6
 * 
 * SÃO IMUTÁVEIS
 */

console.log('-- NUMBER --');
// integers ou floating-point

const intNumber = 37;
const floatNumber = 3.14151927;
const infNumber = Infinity;
const notANumber = NaN;

let age = 37;
console.log('age / 2:', age / 2);
const name = 'DK';
const result = name / 2;
console.log('nome / 2', result * 10);

console.log('-- EXPRESSÕES MATEMÁTICAS --');

const soma = 2 + 2;
const subtracao = 4 - 2;
const multiplicacao = 3 * 2;
const divisao = 6 / 2;
console.log(soma);
console.log(subtracao);
console.log(multiplicacao);
console.log(divisao);

const exponencial = 2 ** 5;
console.log(exponencial);

const quociente1 = 4 / 2;
const modulo1 = 4 % 2;
console.log(quociente1, modulo1);

const quociente2 = 5 / 2;
const modulo2 = 5 % 2;
console.log(quociente2, modulo2);

const divisivelPor2 = 9 % 2 === 0;
console.log(divisivelPor2);

console.log('-- operadores de atribuição --');

age = 22;
console.log(age);

age = age + 1; // 23
console.log(age);
age %= 5;
console.log(age);

console.log('-- expressões matemáticas --');
const exp1 = 4 + 2;
console.log(exp1);

const exp2 = (7 + 5) / 3 - 8;
console.log(exp2);
// PEMDAS
// Parenteses
// Expoente
// Multiplicação
// Divisão
// Adição
// Subtração

const exp3 = 10 + (5 * 2 ** 3) / 4 - 6;
console.log(exp3);


console.log('-- STRINGS --');

const str1 = 'aspas simples';
const str2 = "aspas duplas";
const str3 = `crase ou backticks`; // template literals ou template string

const student = 'Jandson';
console.log(`Olá, ${student}!`);
console.log(`${student} estuda ${1 + 2} horas por dia.`)

// jeito antigo < ES6;
var customer1 = {
  firstName: 'Hélio',
  lastName: 'Cunha'
};

var msg1 = 'Oi, ' + customer1.firstName + ' ' + customer1.lastName + '!';
console.log(msg1);

// jeito novo >= ES6
const customer2 = {
  firstName: 'Gabriel',
  lastName: 'Oliveira'
};

const msg2 = `Oi, ${customer2.firstName} ${customer2.lastName}!`
console.log(msg2);

const favoriteMovie = 'Meu filme favorito é "O Rei Leão".';
console.log(favoriteMovie);

const mood = 'I\'m OK';
console.log(mood);

const list1 = '1. banana\n2. maçã\n3. goiaba'
console.log(list1);

const list2 = `1. abacaxi
2. kiwi
3. mamão`
console.log(list2);

console.log(favoriteMovie.length);

console.log('-- métodos de string --');
// adicionar / concatenar
let stringContainer = '';
console.log(stringContainer);
stringContainer += 'Olá, aluno!';
console.log(stringContainer);
stringContainer + 'como vai?';
console.log(stringContainer);

// acessar um carácter
const greeting = 'Olá, seja bem vindo!';
console.log(`${greeting} é uma string de comprimento ${greeting.length}`)

// -> charAt(n)
console.log(greeting.charAt(0));
console.log(greeting.charAt(1));
console.log(greeting.charAt(4));
console.log(greeting.charAt(19));
console.log(greeting.charAt(20));

// -> índice
console.log(greeting[0]);
console.log(greeting[1]);
console.log(greeting[4]);
console.log(greeting[19]);
console.log(greeting[20]);

// achar o índice a partir de um trecho
const message = 'Não se preocupe! Não precisa chorar!';
console.log(message.indexOf('Não'));
console.log(message.indexOf('e'));
console.log(message.indexOf('não'));
console.log(message.indexOf('r!'));
console.log(message.indexOf('r'));
console.log(message.indexOf('Não', 20));

// repetir string
console.log('Ola!'.repeat(3));
console.log(`na ${'nana'.repeat(20)}, Batman!`);

// encontrando um trecho pelo índice
console.log(message.substring(15, 20));
console.log(message.substr(15, 5));
console.log(message.slice(15, 20));
console.log(message.slice(-10, -4));


// ordenando
// 'string1'.localCompare('string2');
console.log('barcelona'.localeCompare('miami')); // -1
console.log('miami'.localeCompare('barcelona')); // 1
console.log('Miami'.localeCompare('miami')); // 1
console.log('miami'.localeCompare('miami')); // 0

// .startsWith(str[, posição])
console.log(message.startsWith('Não', 17));

// .endsWith(str[, comprimento])
console.log(message.endsWith('orar!', 10));

// .includes(str[, posição])
console.log(message.includes('preo'));

console.log('-- FIM --');