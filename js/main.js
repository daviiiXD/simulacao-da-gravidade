"use strict";

tela.width = mundo.width;
tela.height = mundo.height;

function render() {

    // renderiza o fundo
    ctx.fillStyle = mundo.background;
    ctx.fillRect(0, 0, mundo.width, mundo.height);

    renderizar(sol);
    renderizar(terra);
    renderizar(marte);
    renderizar(venus);
    renderizar(mercurio);

    requestAnimationFrame(render);
};
render();

gerarPosicoes(jupiter)
gerarPosicoes(marte);
gerarPosicoes(terra);
gerarPosicoes(venus);
gerarPosicoes(mercurio);

function logica() {
    while(true) {
        
        gravidade(venus, terra);
        gravidade(venus, marte);
        gravidade(venus, sol);
        gravidade(venus, mercurio);

        gravidade(terra, venus);
        gravidade(terra, marte);
        gravidade(terra, sol);
        gravidade(terra, mercurio);

        gravidade(sol, terra);
        gravidade(sol, venus);
        gravidade(sol, marte);
        gravidade(sol, mercurio);

        gravidade(marte, venus);
        gravidade(marte, terra);
        gravidade(marte, sol);
        gravidade(marte, mercurio);

        gravidade(mercurio, terra);
        gravidade(mercurio, marte);
        gravidade(mercurio, venus);
        gravidade(mercurio, sol);

        colisaoBorda(terra);
        colisaoBorda(sol);
        colisaoBorda(marte);
        colisaoBorda(venus);
        colisaoBorda(mercurio);

        break;

    };
    requestAnimationFrame(logica);
};

setInterval(()=>{
    document.location.reload(true);
}, 10000);
let tempo = 10;
setInterval(() => {
    tempo -= 1;
    document.querySelector("#tempo").innerHTML = `Gerando novas posições em: ${tempo} segundos`;
}, 1000)

logica();