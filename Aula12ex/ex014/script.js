function carregar() {
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    var minutos = data.getMinutes();
    var minute = data.getMinutes()
    var saudacao;

    if (hora >= 0 && hora < 12) {
        saudacao = "Bom dia!";
        img.src = 'fotomanha.png';
        document.body.style.background = '#e2cd9f';
    } else if (hora >= 12 && hora <= 18) {
        saudacao = "Boa tarde!";
        img.src = 'fototarde.png';
        document.body.style.background = '#e42828';
    } else {
        saudacao = "Boa noite!";
        img.src = 'fotonoite.png';
        document.body.style.background = '#461205';
    }

    // Formatar minutos com zero à esquerda se for menor que 10
    if (minutos < 10) {
        minutos = "0" + minutos;
    }

    // Exibir a hora com minutos e a saudação em linhas separadas
    msg.innerHTML = `Agora são ${hora}:${minutos}.<br>${saudacao}`;
}
