"use strict"

const tela = document.getElementById("tela");
const ctx = tela.getContext("2d");

let mundo = {
    width: 2700,
    height: 2000,

    background: "#44475a",
    g: 9.8 / 10,
    colisao: false,
};
let jupiter = {
    tamanho: 50,
    massa: 10,
    
    x: mundo.width / 2,
    y: 300,
    
    aceleracaoX: 0,
    aceleracaoY: 0,

    velocidadeX: 40,
    velocidadeY: 0,   

    cor: "purple",
};
let marte = {
    tamanho: 30,
    massa: 10,
    
    x: mundo.width / 2,
    y: 400,
    
    aceleracaoX: 0,
    aceleracaoY: 0,

    velocidadeX: 40,
    velocidadeY: 0,   

    cor: "#eb4034",
};
let terra = {
    tamanho: 50,
    massa: 20,
    
    x: mundo.width / 2,
    y: 500,
    
    aceleracaoX: 0,
    aceleracaoY: 0,

    velocidadeX: 30,
    velocidadeY: 0,    

    cor: "#306ae6",
};
let venus = {
    tamanho: 50,
    massa: 10,
    
    x: mundo.width / 2,
    y: 600,

    aceleracaoX: 0,
    aceleracaoY: 0,

    velocidadeX: 25,
    velocidadeY: 0,

    cor: "#c9c9c9"
};
let mercurio = {
    tamanho: 30,
    massa: 30,
    
    x: mundo.width / 2,
    y: 700,

    aceleracaoX: 0,
    aceleracaoY: 0,

    velocidadeX: 15,
    velocidadeY: 0,

    cor: "#d6d187"
};
let sol = {
    tamanho: 400,
    massa: 300,
    
    x: mundo.width / 2,
    y: mundo.height / 2,

    aceleracaoX: 0,
    aceleracaoY: 0,

    velocidadeX: 0,
    velocidadeY: 0,
    
    forcaG: 0,
    
    cor: "#e6c430",
};
let planetaA = {
    tamanho: 200,
    massa: 100,
    
    x: mundo.width / 2 - 1000,
    y: mundo.height / 2,

    aceleracaoX: 0,
    aceleracaoY: 0,

    velocidadeX: 0,
    velocidadeY: 0,

    cor: "#8be9fd"
};
let planetaB = {
    tamanho: 200,
    massa: 100,
    
    x: mundo.width / 2 + 1000,
    y: mundo.height / 2,

    aceleracaoX: 0,
    aceleracaoY: 0,

    velocidadeX: 0,
    velocidadeY: 0,

    cor: "#50fa7b"
};
let astrosA = {
    tamanho: 200,
    massa: -3000,
    
    x: mundo.width / 2,
    y: mundo.height / 2,

    aceleracaoX: 0,
    aceleracaoY: 0,

    velocidadeX: 0,
    velocidadeY: 0,

    cor: "#f1fa8c"
};
let astrosB = {
    tamanho: 100,
    massa: 100,
    
    x: mundo.width / 2 - 10,
    y: mundo.height / 2 - 500,

    aceleracaoX: 0,
    aceleracaoY: 0,

    velocidadeX: -5,
    velocidadeY: 0,

    cor: "#ffb86c"
};
let astrosC = {
    tamanho: 100,
    massa: 100,
    
    x: mundo.width / 2 + 100,
    y: mundo.height / 2 + 200,

    aceleracaoX: 0,
    aceleracaoY: 0,

    velocidadeX: 5,
    velocidadeY: 0,

    cor: "#ff79c6"
};