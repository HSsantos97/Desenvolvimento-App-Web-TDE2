var fs = require('fs');
fs.appendFile('arquivoTDE.txt', 'Desenvolvimento Web App3',
function (err) {

if (err) throw err;
console.log('Arquivo atualizado com sucesso!');
});