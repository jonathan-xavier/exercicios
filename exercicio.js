// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
// var lines = input.split('\n');

// var lines = [3,15,167, 1]

// const myNumbers = lines.shift().split(" ")

// var result = [...lines].sort((a, b) => a - b)
// var crescente = [...myNumbers].sort((a,b) => a - b).join('\n')
// console.log(`${crescente} \n\n`,myNumbers)

// console.log(result)


    // var timer = Date.now() + (20 * 1000)
    // console.log("timer: ",timer / 1000)
    // let secondsCount = 20
    // let mysetTimer = setInterval(() =>{
    //     let remainingTime = (timer - Date.now())/ 1000
    //     console.log("remaining",remainingTime)
    //     secondsCount = remainingTime
    //     if(secondsCount <= 0 ){
    //         clearInterval(mysetTimer)
    //     }
    //     console.log(remainingTime)
    // }, 1000)

    // two sum
// var nums =  [3,2,3]
// var target = 6
 
// for(let i = 0; i< nums.length; i++){
//     if(nums[i] + nums[i+1] === target){
//         console.log([i, i+1])
//     } 
// }

// let map = new Map();
// for(let i = 0; i< nums.length; i++){
//     let num1 = nums[i];
//     let num2 = target - num1;
//     if(map.has(num2)){
//         return [map.get(num2), i]
//     }
//     map.set(num1, i)
// }


/////////////fim two sum

//palindrome

// var x = 121;

// let reverse = Number(x.toString().split('').reverse().join(''))
// if(reverse == x){
//     true
// }
//     false
// console.log(reverse, original)
//

//exercicio romano

// let enter = "LVIII" 
// let numerals = {
//     'I':1,
//     'V':5, 
//     'X': 10, 
//     'L':50, 
//     'C':100, 
//     'D':500, 
//     'M':1000

// }

// let newValue = enter.split("").map(char => numerals[char]);

// const result = newValue.reduce((total, current, index) => {
//     const next = newValue[index + 1];
//     if (next && current < next) {
//         return total - current;
//     }
//     return total + current;
// },0)

// console.log(result)


// let myArray = [5,3,2,4,6,7,9]

// const result = myArray.reduce((prev,current, index) => prev + current )
// console.log(result)


const pessoas = [
    {
        nome: 'jonathan',
        idade: 31
    },
    {
        nome: 'joao',
        idade: 14
    },
    {
        nome: 'maria',
        idade: 23
    },
    {
        nome: 'jamilly',
        idade: 18
    },

    {
        nome: 'lucas',
        idade: 32
    },
    {
        nome: 'matheus',
        idade: 15
    },
    {
        nome: 'isa',
        idade: 23
    },
    {
        nome: 'luiza',
        idade: 17
    },
]


// let result = pessoas.reduce((acc, current) => {
//     // const propMaiorOuMenor = current.idade > 18 ? 'maiores' : 'menores';
//     // acc[propMaiorOuMenor].push(current)

//     // return acc;
//     if(current.idade >= 18){
//          acc.maiores.push(current);
//     }else if (current.idade < 18){

//         acc.menores.push(current)
//     }
//     return acc;
// }, {maiores: [], menores:[]})

// console.log(result)

const itens = [
    { nome: 'Maçã', categoria: 'Fruta' },
    { nome: 'Alface', categoria: 'Vegetal' },
    { nome: 'Banana', categoria: 'Fruta' },
    { nome: 'Cenoura', categoria: 'Vegetal' },
    { nome: 'Pão', categoria: 'Carboidrato' }
  ];

  let result = itens.reduce((prev, current) => {

    if(['Fruta'].includes(current.categoria)){
        prev['fruta'].push(current)
    }else if(['Vegetal'].includes(current.categoria)){
        prev['vegetal'].push(current)
    }else {
        prev['carboidrato'].push(current)
    }

    return prev;
  }, {fruta: [], vegetal:[], carboidrato: []})
  

  console.log(result)
  
 


   
    
