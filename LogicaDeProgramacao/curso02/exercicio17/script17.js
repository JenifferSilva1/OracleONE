
// bolinha que anda da esquerda pra direita até sumir do canvas

var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');
pincel.fillStyle = 'lightgray';
pincel.fillRect(0, 0, 600, 400);

function desenhaCirculo(x, y, raio) {
    pincel.fillStyle = 'purple';
    pincel.beginPath();
    pincel.arc(x, y, raio, 0, 2 * Math.PI);
    pincel.fill()
}

function limpaTela() {
    pincel.clearRect(0, 0, 600, 400);
}

// vai atualizando e dando a impressão de movimento
var x = 20;
function atualizaTela() {
    limpaTela();
    desenhaCirculo(x, 20, 10);
    x++;
}
setInterval(atualizaTela, 10);