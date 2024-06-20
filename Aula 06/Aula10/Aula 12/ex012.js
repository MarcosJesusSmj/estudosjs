var agora = new Date(); // Cria um novo objeto Date que representa o momento atual.
var hora = agora.getHours(); // Obtém a hora atual do objeto Date.
var minutos = agora.getMinutes(); // Obtém os minutos atuais do objeto Date.
var segundos = agora.getSeconds(); // Obtém os segundos atuais do objeto Date.

console.log(`Agora são exatamente: ${hora} horas, ${minutos} minutos e ${segundos} segundos!`); // Imprime a hora atual.

if (hora < 12) {
    console.log(`Bom Dia!`)
    } else if (hora <= 18) {
        console.log(`Boa Tarde!`)
    } else {
        console.log(`Boa Noite!`)
    }
