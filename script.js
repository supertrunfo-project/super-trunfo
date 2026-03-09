const cartas = [
    { nome: "Dragão de Fogo", ataque: 95, defesa: 80 },
    { nome: "Guerreiro de Aço", ataque: 80, defesa: 90 },
    { nome: "Mago Arcano", ataque: 85, defesa: 70 },
    { nome: "Ciclope", ataque: 75, defesa: 60 }
];

function jogar() {
    // Sorteia uma carta para o jogador e uma para a máquina
    const cartaJogador = cartas[Math.floor(Math.random() * cartas.length)];
    const cartaMaquina = cartas[Math.floor(Math.random() * cartas.length)];

    // Mostra na tela
    document.getElementById("info-jogador").innerHTML = `<p>${cartaJogador.nome}</p><p>Ataque: ${cartaJogador.ataque}</p>`;
    document.getElementById("info-maquina").innerHTML = `<p>${cartaMaquina.nome}</p><p>Ataque: ${cartaMaquina.ataque}</p>`;

    // Compara quem ganha no Ataque
    const resultadoDiv = document.getElementById("resultado");
    if (cartaJogador.ataque > cartaMaquina.ataque) {
        resultadoDiv.innerHTML = "Você Venceu! 🎉";
    } else if (cartaJogador.ataque < cartaMaquina.ataque) {
        resultadoDiv.innerHTML = "A Máquina Venceu! 🤖";
    } else {
        resultadoDiv.innerHTML = "Empate! ⚔️";
    }
}
