/*
Autor: Jhonata Vinicius
*/

var visualizarCarrinho = document.querySelector('div #carrinho-visu iframe');
var alertInstrucoes = document.getElementById('avisoInstrucoes');
setInterval(function() { carregarPag(); }, 12000);
var pagSeguroCompra = "https://pagseguro.uol.com.br/checkout/checkout.jhtml";

function carregarPag() {
    visualizarCarrinho.src = "https://pagseguro.uol.com.br/v2/checkout/cart.html?action=view";
}

function openWindow() {
    myWindow = window.open("https://pagseguro.uol.com.br/checkout/checkout.jhtml", "_blank");
}



function fecharAviso() {
    alertInstrucoes.style.display = "none";
}
