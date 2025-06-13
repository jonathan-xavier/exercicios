// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
// var lines = input.split('\n');

// const valores = lines.shift().split(" ")
// const array = [...valores]

const isAtriangle = (valorA, valorB, valorC) => {

    const arrayToSort = [].concat(valorA, valorB, valorC).sort((a, b) => b - a)
    const [a, b, c] = arrayToSort
    let exception = ""
    let result = ""
    const mainResult = [];

    let equal = arrayToSort.reduce((acc, item) => {
        acc[item] = (acc[item] ?? 0) + 1
        return acc;
    }, {})

    if (Object.values(equal).some(count => count === 2)) {
        exception = "TRIANGULO ISOSCELES"
    }
    if (Object.values(equal).some(count => count === 3)) {
        exception = "TRIANGULO EQUILATERO"
    }

    if (a >= b + c) {
        result = "NAO FORMA TRIANGULO"
    } else if (Math.pow(a, 2) === ((b ** 2) + (c ** 2))) {
        result = "TRIANGULO RETANGULO"
    } else if (Math.pow(a, 2) > (b * b + c * c)) {
        result = "TRIANGULO OBTUSANGULO"
    } else if (Math.pow(a, 2) < (b * b + c * c)) {
        result = "TRIANGULO ACUTANGULO"
    }
    if (result) {
        mainResult.push(result)
    }
    if (exception) {
        mainResult.push(exception)
    }
    return mainResult
}

const valores = [7.0, 7.0, 12.0]
const [a, b, c] = valores.map(item => parseFloat(item))
const formateed = isAtriangle(a, b, c)
let formattedArray = ""
if (formateed.length === 2) {
    formattedArray = formateed.join("\n")
} else {
    formattedArray = formateed.join("")
}

console.log(formattedArray)


