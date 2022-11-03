"use strict";

tela.width = mundo.width + 1000;
tela.height = mundo.height + 1000;

function render() {

    // renderiza o fundo
    ctx.fillStyle = mundo.background;
    ctx.fillRect(0, 0, mundo.width, mundo.height);

    renderizar(astrosC);
    renderizar(astrosB);
    renderizar(astrosA);

    requestAnimationFrame(render);
};
render();

function logica() {
    while(true) {
        
        gravidade(astrosA, astrosB);
        gravidade(astrosA, astrosC);

        gravidade(astrosB, astrosA);
        gravidade(astrosB, astrosC);

        gravidade(astrosC, astrosA);
        gravidade(astrosC, astrosB);

        colisaoBorda(astrosC);
        colisaoBorda(astrosB);
        colisaoBorda(astrosA);

        break;

    };
    requestAnimationFrame(logica);
};

logica();