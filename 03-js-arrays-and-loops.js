// declarando um array

const arrayNames = ['Renata', 'Gabriel', 'João', 'Hugo'];
// índices -->       0         1          2       3

// const arrayMix = ['Jandson', 2, true, {}, []];

// const arrayLength = arrayNames.length;
const lastIndex = arrayNames.length - 1;
// length => 4
// último índice => 3 = length - 1

const lastElement = arrayNames[lastIndex]

console.log(arrayNames[0]);
console.log(arrayNames[1]);
console.log(arrayNames[2]);
console.log(arrayNames[3]);

// adicionando elementos
console.log('original:', arrayNames);

arrayNames.push('Walison'); // adiciona no final
console.log('depois do push:', arrayNames);

arrayNames.unshift('Jandson'); // adiciona no começo
console.log('depois do unshift:', arrayNames);

// removendo elementos
arrayNames.pop(); // remove do final
console.log('depois do pop:', arrayNames);

arrayNames.shift(); // remove do começo
console.log('depois do shift:', arrayNames);

const retornoDoSplice = arrayNames.splice(1, 2); // remove o índice e a quantidade
console.log('depois do splice:', arrayNames);
console.log('retorno do splice:', retornoDoSplice);

// Loops
console.log('-- loops --');

const names = ['Renata', 'Gabriel', 'João', 'Hugo'];
for(let i = 0; i < names.length; i += 1) {
  console.log(names[i]);
}

console.log('-- forEach --')
// forEach
// names.forEach(function (element) {
//   console.log(element);
// });

// declared function
function forEachName (name) {
  console.log(name)
}

// arrow function
const forEachNameArrow = (name) => {
  console.log(name)
}

// HOF: high order function
names.forEach((name) => console.log(name));

['a', 'b', 'c'].forEach(() => console.log('goiaba'));
['a', 'b', 'c'].forEach((element) => console.log(element));
['a', 'b', 'c'].forEach((element, index) => console.log(`${index}: ${element}`));
['a', 'b', 'c'].forEach((element, index, arrayOriginal) => console.log(arrayOriginal));

