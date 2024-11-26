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
