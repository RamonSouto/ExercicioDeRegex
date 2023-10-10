// no inicio ...
// um byte (8 bits) - 256 caracteres
// simbolos, pontuacao A-Z, a-z, 0-9

// Dois bytes (16 bits) - 65500+ caracteres
// + Símbolos, +Pontuacao, A-Z, a-z, 0-9

// Unicode 
// Quantidade de Bytes variável - Expansível
// Suporta mais de 1 Milhão caracteres
// Atualmente tem mais de 100.00 caracteres atribuidos

// https://unicode-table.com/pt

const texto = 'aʬc௵d'

console.log(texto.match(/\u02AC|\u0BF5/g))