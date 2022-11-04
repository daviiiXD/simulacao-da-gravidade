"use strict";

tela.width = mundo.width;
tela.height = mundo.height;

function render() {

    // renderiza o fundo
    ctx.globalAlpha = 0.5;
    ctx.fillStyle = mundo.background;
    ctx.fillRect(0, 0, mundo.width, mundo.height);
    
    ctx.globalAlpha = 1;
    renderizar(astrosB);
    renderizar(astrosA);
    renderizar(astrosC);

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

        colisao(astrosA, astrosB);

        colisaoBorda(astrosB);
        colisaoBorda(astrosA);
        colisaoBorda(astrosC);

        break;

    };
    requestAnimationFrame(logica);
};

logica();