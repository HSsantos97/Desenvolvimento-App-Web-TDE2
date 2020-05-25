var fs = require('fs');
fs.writeFile('arquivoTDE.txt', 'Desenvolvimento Web App2',
function (err) {

if (err) throw err;
console.log('Arquivo aberto com sucesso!');
});