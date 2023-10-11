const texto1 = 'De longe eu avistei fogo e uma pessoa grtou: FOGOOOOOO!'
const texto2 = 'There is a big fog in NYC'

// ? → zero ou um  (opcional)
const regex = /fogo?/gi
console.log(texto1.match(regex));
console.log(texto2.match(regex));