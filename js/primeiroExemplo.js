'use strict';

tela.width = mundo.width;
tela.height = mundo.height;


function render() {
    // renderiza o fundo
    ctx.globalAlpha = 0.3;
    ctx.fillStyle = mundo.background;
    ctx.fillRect(0, 0, mundo.width, mundo.height);

    ctx.globalAlpha = 1;
    renderizar(planetaA);
    renderizar(planetaB);

    requestAnimationFrame(render);
};
render();

function logica() {
    while(true) {
        gravidade(planetaA, planetaB);
        gravidade(planetaB, planetaA);

        colisao(planetaA, planetaB);
        colisaoBorda(planetaA);
        colisaoBorda(planetaB);

        break;
    };
    requestAnimationFrame(logica);
};
logica();