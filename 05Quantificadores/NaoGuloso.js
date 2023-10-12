const texto = '<div>Conteudo 01</div><div>Conteudo 02</div>'

// quantificadores SÃO gulosos (greedy)...
console.log(texto.match(/<div>.+<\/div>/g)); // Operador Greedy
console.log(texto.match(/<div>.*<\/div>/g)); // Operador Greedy
console.log(texto.match(/<div>.{0,100}<\/div>/g)); // Operador Greedy
console.log(texto.match(/<div>.{0,100}<\/div>/g)); // Operador Greedy


// quantificadores NÃO gulosos (lazy)...
console.log(texto.match(/<div>.+?<\/div>/g)); // Operador Lazy
console.log(texto.match(/<div>.*?<\/div>/g)); // Operador Lazy
console.log(texto.match(/<div>.{0,100}?<\/div>/g)); // Operador Lazy