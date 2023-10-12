const texto1 = 'De longe eu avistei fogo e uma pessoa grtou: FOGOOOOOO!'
const texto2 = 'There is a big fog in NYC'

// + → um ou mais (opcional)
const regex = /fogo+/gi
console.log(texto1.match(regex));
console.log(texto2.match(regex));

const texto3 = 'Os números: 123456789.'
console.log(texto3.match(/[0-9]/g));
console.log(texto3.match(/[0-9]+/g));
console.log(texto3.match(/\d/g));
console.log(texto3.match(/\d+/g));

