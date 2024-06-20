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

var vel = 59.9

console.log(`A velocidade de seu carro é ${vel} Km/h`)
if (vel > 60) {
    console.log(`Voce ultrapassou a velocidade permitida. MULTADO!`)
}
console.log(`Dirija sempre usando o cinto de segurança!`)
