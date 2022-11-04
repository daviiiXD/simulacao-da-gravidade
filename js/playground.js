'use strict';

tela.width = mundo.width;
tela.height = mundo.height;


function render() {

    // renderiza o fundo
    ctx.globalAlpha = 0.5;
    ctx.fillStyle = mundo.background;
    ctx.fillRect(0, 0, mundo.width, mundo.height);
    
    ctx.globalAlpha = 1;
    renderizar(astrosD);
    renderizar(astrosE);
    renderizar(buracoNegro);

    requestAnimationFrame(render);
};
render();


function logica() {
    while(true) {
        
        gravidade(astrosD, astrosE);
        gravidade(astrosD, buracoNegro);
        
        gravidade(astrosE, astrosD);
        gravidade(astrosE, buracoNegro);

        gravidade(buracoNegro, astrosD);
        gravidade(buracoNegro, astrosE);

        colisao(astrosD, buracoNegro);
        colisao(astrosE, buracoNegro);

        colisaoBorda(astrosD);
        colisaoBorda(astrosE);

        break;

    };
    requestAnimationFrame(logica);
};

logica();