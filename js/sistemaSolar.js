"use strict";

tela.width = mundo.width;
tela.height = mundo.height;

function render() {

    // renderiza o fundo
    ctx.globalAlpha = 0.5;
    ctx.fillStyle = mundo.background;
    ctx.fillRect(0, 0, mundo.width, mundo.height);

    ctx.globalAlpha = 1;
    renderizar(sol);
    renderizar(jupiter);
    renderizar(marte);
    renderizar(terra);
    renderizar(venus);
    renderizar(mercurio);

    requestAnimationFrame(render);
};
render();

function logica() {
    while(true) {
        gravidade(jupiter, sol);
        gravidade(marte, sol);
        gravidade(terra, sol);
        gravidade(venus, sol)
        gravidade(mercurio, sol)

        colisaoBorda(terra);
        colisaoBorda(sol);
        colisaoBorda(marte);
        colisaoBorda(venus);
        colisaoBorda(mercurio);

        break;

    };
    requestAnimationFrame(logica);
};

logica();