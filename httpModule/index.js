
const http = require('http');

const {addNumber, subNumber, mulNumber, divNumber} = require('../localModules');

console.log(`Addition: ${addNumber(10,5)}`)
console.log(`Subtraction: ${subNumber(10,5)}`)
console.log(`Multiplication: ${mulNumber(10,5)}`)
console.log(`Division: ${divNumber(10,5)}`)