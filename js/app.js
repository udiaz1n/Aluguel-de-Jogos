/*confirmar = prompt("A devolução foi solicitada?")
if (confirmar == "sim") {
    alert("Jogo devolvido!")
}
else if (confirmar.toLowerCase() == "não" || confirmar.toLowerCase() == "nao") {
    alert("Não devolva o jogo!")
}
else {
    alert("Responda com SIM ou NÃO.")
    while (confirmar != "sim" && confirmar.toLowerCase != "não" && confirmar.toLowerCase != "nao") {
        confirmar = prompt("A devolução foi solicitada?")
        if (confirmar != "sim" && confirmar.toLowerCase() != "não" && confirmar.toLowerCase() != "nao") {
            alert("Jogo devolvido!")
        }
    }
}

}
 var games = [
    { id: "game-1", nome: "Monopoly", alugado: false },
    { id: "game-2", nome: "Ticket to Ride", alugado: false },
    { id: "game-3", nome: "Takenoko", alugado: false },
];
var carrinho = [];

function adicionarAoCarrinho(id) {
    var game = games.find((game) => game.id == id);
    if (game && !game.alugado) {
        carrinho.push(game);
    }
} */
var confirmar;
var dev = "O jogo continua alugado!";
var ved = "Jogo alugado!"

function exibirAlerta() {
    alert("Jogo devolvido!")
}

function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let quantidade = []

    console.log("quantidade")

    //console.log(nomeJogo.innerHTML);
    if (imagem.classList.contains('dashboard__item__img--rented')) {

        confirmar = prompt("A devolução foi solicitada?")

        if (confirmar.toLowerCase() == "sim" || confirmar.toLowerCase() == "SIM") {

            imagem.classList.remove('dashboard__item__img--rented');
            botao.classList.remove('dashboard__item__button--return');
            botao.textContent = 'Alugar'

            exibirAlerta()
        }
        else if (confirmar.toLowerCase() == "não" || confirmar.toLowerCase() == "nao") {
            alert(dev)
        }
        else {
            alert("Responda com SIM ou NÃO!")
            while (confirmar.toLowerCase !== "sim" && confirmar.toLowerCase !== "não" && confirmar.toLowerCase !== "nao") {
                confirmar = prompt("A devolução foi solicitada?")

            }
            if (confirmar == "sim") {
                alert(ved)
            }
            else {
                alert(dev)
            }
        }
    }
    else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
        alert(ved)
    }
    return quantidade;

}
