// seta para baixo
const seta = document.querySelector('#seta')
const carregaimg = ["assets/img/anotacao_branco.png", "assets/img/caderno_roxo.png", "assets/img/anotacao_roxo.png", "assets/img/caderno_branco.png"];


seta.addEventListener('click', () => {
    window.scroll({top: window.innerHeight})
})

// seta para cima
const setaCima = document.querySelector('#seta-cima');

window.addEventListener('scroll', () => {
    if(window.scrollY > 700) {
        setaCima.style.display = "flex"
    } else {
        setaCima.style.display = "none"
    }
})

setaCima.addEventListener ('click', () => {
    window.scrollTo({
        top: 0
    })
})

//AREA DAS ANOTAÇÕES E CADERNO
const caderno = "caderno";
const anotacoes = "anotacoes";
var modo_caderno_anotacao = caderno;

function caderno_select()
{
    //Caderno selecionado
    let anotacoes_select = document.getElementById("anotacoes-select");
    let caderno_select = document.getElementById("caderno-select");
    let imagem_grande = document.getElementById("imagem-grande");

    anotacoes_select.src = "assets/img/anotacoes_branco.png";
    caderno_select.src = "assets/img/caderno_roxo.png";

    imagem_grande.src = "assets/img/caderno-grande.png";

    modo_caderno_anotacao = caderno; 
}

function anotacoes_select()
{
    //Anotações selecionado
    let anotacoes_select = document.getElementById("anotacoes-select");
    let caderno_select = document.getElementById("caderno-select");
    let imagem_grande = document.getElementById("imagem-grande");
    
    anotacoes_select.src = "assets/img/anotacoes_roxo.png";
    caderno_select.src = "assets/img/caderno_branco.png";

    imagem_grande.src = "assets/img/anotacao-grande.png";

    modo_caderno_anotacao = anotacoes;
}

//Planner mudando de imagem
const desempenho = "desempenho";
const inteligente = "inteligente";
const integracao = "integracao";
var imagem_grande = document.getElementById("image-planner");

var modo_planner = desempenho;

function planner_desempenho()
{
    imagem_grande.src = "assets/img/planner.gif";
    imagem_grande.style.height = "754px";
}

function planner_inteligente()
{
    imagem_grande.src = "assets/img/filtrar.gif";
    imagem_grande.style.height = "754px";
}

function planner_integracao()
{
    imagem_grande.src = "assets/img/calendario.gif";
    imagem_grande.style.height = "754px";
}


// Animações
ScrollReveal().reveal('.conheca-nuria', {
    origin: 'left',
    duration: 2000,
    distance: '20%',
})

ScrollReveal().reveal('#oquee', {
    opacity: 0,
    duration: 2000,
    scale: 1.1
})

ScrollReveal().reveal('#info-nuria', {
    origin: 'left',
    distance: '15%',
    duration: 1000
})

ScrollReveal().reveal('#nurinha', {
    origin: 'right', 
    distance: '15%',
    duration: 1000
})

ScrollReveal().reveal('#caderno-esquerda p', {
    origin: 'left',
    distance: '15%',
    duration: 2000
})

ScrollReveal().reveal('#caderno-img', {
    origin: 'bottom',
    distance: '30%',
    duration: 2000,
    interval: 300
})

ScrollReveal().reveal('#slide-caderno', {
    origin: 'right',
    distance: '15%',
    duration: 2000
})

ScrollReveal().reveal('.info-planner p', {
    origin: 'left',
    distance: '15%',
    duration: 1000,
    opacity: 0
})

ScrollReveal().reveal('.container-planner', {
    origin: 'right',
    distance: '15%',
    duration: 2000,
    interval: 100
})

ScrollReveal().reveal('.chama-geral', {
    opacity: 0,
    scale: 0.85,
    duration: 2000
})

ScrollReveal().reveal('.info-desempenho p', {
    origin: 'left',
    distance: '20%',
    duration: 2000
})

ScrollReveal().reveal('#desempenho img', {
    origin: 'bottom',
    distance: '25%',
    duration: 2000
})

ScrollReveal().reveal('.produtividade-esquerda', {
    origin: 'left',
    duration: 2000,
    distance: '20%'
})

ScrollReveal().reveal('.produtividade-direita p', {
    origin: 'right',
    duration: 2000,
    distance: '20%'
})

ScrollReveal().reveal('#funcao', {
    origin: 'bottom',
    distance: '20%',
    duration: 2000,
    interval: 100
})

ScrollReveal().reveal('.socios-linha1', {
    origin: 'left',
    distance: '20%',
    duration: 2000,
    interval: 100
})

ScrollReveal().reveal('.embreve-esquerdo', {
    origin: 'left',
    duration: 2000,
    distance: '20%'
})

ScrollReveal().reveal('.embreve-direito', {
    opacity: 0,
    duration: 2000
})

ScrollReveal().reveal('#ultimo-divider', {
    opacity: 0,
    duration: 2000,
})