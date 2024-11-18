// carrossel
const imagens = document.querySelectorAll('.imagens');
const text = document.querySelectorAll('.text');
const btnBack = document.getElementById('back-button');
const btnNext = document.getElementById('next-button');

// passador do slide (soma=passa, sub=volta)
let currentSlide = 0;

// função de esconder o carrossel
function hideImagens () {
    imagens.forEach(item => item.classList.remove('on'))
    text.forEach(item => item.classList.remove('on'))
}

// função de mostrar o carrossel
function showImagens() {
    imagens[currentSlide].classList.add('on')
    text[currentSlide].classList.add('on')
}

// função de avançar
function nextImagem() {
    hideImagens()
    if(currentSlide === imagens.length -1) {
        currentSlide = 0
    } else {
        currentSlide++
    }
    showImagens()
}

// função de voltar
function backImagem() {
    hideImagens()
    if(currentSlide === 0) {
        currentSlide = imagens.length -1
    } else {
        currentSlide--
    }
    showImagens()
}

btnBack.addEventListener('click', nextImagem)
btnNext.addEventListener('click', backImagem)

console.log(imagens)