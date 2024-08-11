function ligar() {
    document.getElementById("lampada").src = "imagens/lampada-acesa.png";
    document.getElementById("instrucao").innerHTML = "Parabéns! Você conseguiu."
    document.getElementById("texto2").hidden = false;
    document.getElementById('botao').hidden = false;
}
function apagar() {
    document.getElementById("lampada").src = "imagens/lampada-apagada.png";
    document.getElementById("instrucao").innerHTML = `Parabéns! Você venceu!`
    document.getElementById("texto2").hidden = true;
    document.getElementById("botao").hidden = false;
}
function quebrar() {
    document.getElementById("lampada").src = "imagens/lampada-quebrada.png";
    document.getElementById("instrucao").innerHTML = "Que pena!<br> Você quebrou a lâmpada."
    document.getElementById("texto2").hidden = true;
    document.getElementById('botao').hidden = false;
}
function reiniciar() {
    document.getElementById("lampada").src = "imagens/lampada-apagada.png";
    document.getElementById("texto2").hidden = true;
    document.getElementById('botao').hidden = true;
    document.getElementById("instrucao").innerHTML = `Descubra como <a href="#" id="acender" onclick="ligar()">acender</a> a
        luz.`
}