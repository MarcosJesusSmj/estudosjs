const readline = require('readline');

const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

input.question('Informe um número: ', (resposta) => {
  // TODO: Log the answer in a database
  console.log(`Número informado: ${resposta}`);
  input.close();
});

console.log('Vai Começar ... ')
for( var c = 1; c <= 100; c++ ) {
    console.log(c)
}
console.log('FIM!')
