const seta = document.querySelector('#seta')
const carregaimg = ["assets/img/anotacao_branco.png", "assets/img/caderno_roxo.png", "assets/img/anotacao_roxo.png", "assets/img/caderno_branco.png"];
const carregagif = ["assets/img/"]


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



//PLANNER----------------------------------------------------
//AREA DAS ANOTAÇÕES E CADERNO
const caderno = "caderno";
const anotacoes = "anotacoes";
var modo_caderno_anotacao = caderno;

function caderno_select() {
    // Caderno selecionado
    let anotacoes_select = document.getElementById("anotacoes-select");
    let caderno_select = document.getElementById("caderno-select");
    let imagem_grande = document.getElementById("imagem-grande");

    anotacoes_select.src = "assets/img/anotacoes_branco.png";
    caderno_select.src = "assets/img/caderno_roxo.png";

    imagem_grande.src = "assets/img/caderno-animação.gif";

    modo_caderno_anotacao = caderno;
}

function anotacoes_select() {
    // Anotações selecionado
    let anotacoes_select = document.getElementById("anotacoes-select");
    let caderno_select = document.getElementById("caderno-select");
    let imagem_grande = document.getElementById("imagem-grande");

    anotacoes_select.src = "assets/img/anotacoes_roxo.png";
    caderno_select.src = "assets/img/caderno_branco.png";

    imagem_grande.src = "assets/img/urbanização.gif";

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
    //Desempenho
    imagem_grande.src = "assets/img/planner.gif";
    imagem_grande.style.height = "auto";
    imagem_grande.style.width = "480px";

    //------STYLE MOMENTS-------
    ///AVISO!!! OS ELEMENTOS ESTÃO SENDO REQUISITADOS PELO NOME DO ID!!!! NÃO ESQUECER POR FAVOR!
    let button_desempenho = document.getElementById("button-desempenho");
    let button_filtros = document.getElementById("button-filtro");
    let button_caderno = document.getElementById("button-caderno");

    //Alterando a si mesmo
    button_desempenho.style.opacity = "1";
    button_desempenho.style.transform = "scale(1)";

    //Alterando os outros!
    button_filtros.style.opacity = "0.4";
    button_filtros.style.transform = "scale(0.95)";

    button_caderno.style.opacity = "0.4"; 
    button_caderno.style.transform = "scale(0.95)";

    //Setando o select como true para ele não alterar mais!
    select = true;
}

function planner_inteligente()
{
    //Filtrar
    imagem_grande.src = "assets/img/filtrar.gif";
    imagem_grande.style.height = "auto";
    imagem_grande.style.width = "480px";
    

    //------STYLE MOMENTS-------
    ///AVISO!!! OS ELEMENTOS ESTÃO SENDO REQUISITADOS PELO NOME DO ID!!!! NÃO ESQUECER POR FAVOR!
    let button_desempenho = document.getElementById("button-desempenho");
    let button_filtros = document.getElementById("button-filtro");
    let button_caderno = document.getElementById("button-caderno");

    //Alterando o seu proprio!
    button_filtros.style.opacity = "1";
    button_filtros.style.transform = "scale(1)";

    //Alterando os outros!
    button_desempenho.style.opacity = "0.4";
    button_desempenho.style.transform = "scale(0.95)";

    button_caderno.style.opacity = "0.4";
    button_caderno.style.transform = "scale(0.95)";

    //Setando o select como true para ele não alterar mais!
    select = true;
}

function planner_integracao()
{
    //Calendario
    imagem_grande.src = "assets/img/calendario.gif";
    imagem_grande.style.height = "auto";
    imagem_grande.style.width = "480px";

    //------STYLE MOMENTS-------
    ///AVISO!!! OS ELEMENTOS ESTÃO SENDO REQUISITADOS PELO NOME DO ID!!!! NÃO ESQUECER POR FAVOR!
    let button_desempenho = document.getElementById("button-desempenho");
    let button_filtros = document.getElementById("button-filtro");
    let button_caderno = document.getElementById("button-caderno");

    //Alterando a si mesmo
    button_caderno.style.opacity = "1";
    button_caderno.style.transform = "scale(1)";

    //Alterando os outros
    button_desempenho.style.opacity = " 0.4";
    button_desempenho.style.transform = "scale(0.95)";

    button_filtros.style.opacity = "0.4";
    button_filtros.style.transform = "scale(0.95)";

    //Setando o select como true para ele não alterar mais!
    select = true;
}
//END PLANNER----------------------------------------------------










///SUBSTITUIÇÃO DO HOVER CSS ABAIXO. NÃO TOCAR!!!!!!!!!!!!!!-------------
var select = false;

function planner_button_hover(object)
{
    //Função HOVER
    if(select) return;

    let nomes = [document.getElementById("button-desempenho"), document.getElementById("button-filtro"), document.getElementById("button-caderno")];
    let element = document.getElementById(object.id);

    //ANIM
    for(var i=0; i<nomes.length; i++)
    {
        let select = nomes[i];
        if(select != element)
        {
            nomes[i].style.opacity = "0.4";
            nomes[i].style.transform = "scale(0.95)";
        }
    }
    
}

function planner_button_nohover()
{
    //Função HOVER
    if(select) return;

    let nomes = [document.getElementById("button-desempenho"), document.getElementById("button-filtro"), document.getElementById("button-caderno")];

    //ANIM
    for(var i=0; i<nomes.length; i++)
    {
        nomes[i].style.opacity = "1";
        nomes[i].style.transform = "scale(1)";
    }
}
//END-------------------------------------------------------------










//ANIMAÇÕESS-----------------------------------------------
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
    distance: '21%'
})

ScrollReveal().reveal('.embreve-direito', {
    opacity: 0,
    duration: 2000
})

ScrollReveal().reveal('#ultimo-divider', {
    opacity: 0,
    duration: 2000,
})
//END ANIMAÇÕESS-----------------------------------------------


// JAVA SCRIPT DO HEADER-----------------------------------------------
document.addEventListener('DOMContentLoaded', function () {
    const mobileMenu = document.getElementById('mobile-menu');
    const null_screen = document.getElementById('null-screen');
    const itens_menu = document.getElementsByClassName("nav-item");
    const overlay = document.getElementById("overlay-menu")

    //Fechar o menu sandwich quando um item dele for clicado!
    for(var i = 0; i < itens_menu.length; i++)
    {
        var item = itens_menu.item(i);
        item.addEventListener('click', function ()
    {
        mobileMenu.style.display = "none";
        null_screen.style.display = "none";
    });
    }
});

//FUNÇÃO DE ABRIR O MENU SANDWICH!
function menu_sandwich_open()
{
    console.log("Abriu porra!");
    const mobileMenu = document.getElementById("mobile-menu");
    const nullscreen = document.getElementById("null-screen");
    mobileMenu.style.display = "flex";
    nullscreen.style.display = "flex";
}

//FUNÇÃO DE FECHAR O MENU SANDWICH!
function menu_sandwich_close()
{
    const mobileMenu = document.getElementById("mobile-menu");
    const nullscreen = document.getElementById("null-screen");
    mobileMenu.style.display = "none";
    nullscreen.style.display = "none";
}
//END JAVA SCRIPT DO HEADER-----------------------------------------------