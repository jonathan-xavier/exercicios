// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
// var lines = input.split('\n');

// const numeros = lines.shift().split(" ")
// const array = [...numeros]

// array.sort((a, b) => a - b)

// console.log(
//   `${array[0]}\n${array[1]}\n${array[2]}\n\n${numeros[0]}\n${numeros[1]}\n${numeros[2]}`
// )

const myarray = [3, 2, 7, 5, 8, 3, 7, 3];

// const result = myarray.filter((item, index, self) => {
//      return self.indexOf(item) !== index
// })
// console.log("resultado: ", result);

const seen = new Set();
const duplicates = new Set();

myarray.forEach(item => {
    if(seen.has(item)){
        duplicates.add(item);
    }else {
        seen.add(item);
    }
});

//isso aqui tbm funciona. nao repete os valores do array
const arrayNoDuplicates = Array.from(new Set(myarray));

console.log("duplicates: ", seen)