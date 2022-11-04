function gravidade(astroA, astroB) {

    let distancia = Math.sqrt(
        Math.pow((astroA.x - astroB.x), 2) + Math.pow((astroA.y - astroB.y), 2)
    );
    let forcaG = ((astroA.massa * astroB.massa) / Math.pow(distancia), 2) * mundo.g;

    astroA.aceleracaoX = (forcaG * ((astroB.x - astroA.x) / (astroA.massa * 100)));
    astroA.aceleracaoY = (forcaG * ((astroB.y - astroA.y) / (astroA.massa * 100)));
    astroA.velocidadeX += astroA.aceleracaoX;
    astroA.velocidadeY += astroA.aceleracaoY;
    astroA.x += astroA.velocidadeX;
    astroA.y += astroA.velocidadeY;

};
function pegarDistancia(astroA, astroB) {
    return distancia = Math.sqrt(
        Math.pow((astroA.x - astroB.x), 2) + Math.pow((astroA.y - astroB.y), 2)
    );
}
function renderizar(astro) {
    ctx.fillStyle = astro.cor;
    ctx.beginPath();
    ctx.arc(astro.x, astro.y, astro.tamanho / 2, 0, Math.PI * 2, true);
    ctx.fill();
};

function gerarPosicoes(astro) {
    astro.x = Math.random() * ((mundo.width - (astro.tamanho + 50)) - (0 + astro.tamanho + 500)) + 0 + astro.tamanho;
    astro.y = Math.random() * ((mundo.height - (astro.tamanho + 50)) - (0 + astro.tamanho + 500)) + 0 + astro.tamanho;

    astro.velocidadeX = Math.random() * 20;
    astro.velocidadeY = Math.random() * 20;
}

function colisaoBorda(astro) {
    if (astro.x + astro.tamanho / 2 > mundo.width) {
        astro.velocidadeX *= -1;
    }
    else if(astro.y + astro.tamanho / 2 > mundo.height) {
        astro.velocidadeY *= -1;
    };
    if (astro.x - astro.tamanho / 2 < 0) {
        astro.velocidadeX *= -1;
    }
    else if(astro.y - astro.tamanho / 2 < 0) {
        astro.velocidadeY *= -1;
    };
};
function colisao(astroA, astroB) {
    let distancia = Math.sqrt(
        Math.pow((astroA.x - astroB.x), 2) + Math.pow((astroA.y - astroB.y), 2)
    );
    if(distancia < ((astroA.tamanho / 2) + (astroB.tamanho / 2))) {
        astroA.velocidadeX *= -1;
        astroB.velocidadeX *= -1;
    };
};