// g - global
// i - ignora sentive case


const texto = 'Carlos assinou o abaixo-assinado';

const regex1 = /C|ab/;
const regex2 = /c|ab/;
const regex3 = /ab|c/gi;

console.log(texto.match(regex1));
console.log(texto.match(regex2));
console.log(texto.match(regex3));