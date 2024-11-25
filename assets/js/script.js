// seta para baixo
const seta = document.querySelector('#seta')

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

// function checkHeight() {
//     if(Window.scrollY > 200) {
//         setaCima.style.display = "flex"
//     } else {
//         setaCima.style.display = "none"
//     }
// }

// carrossel
// const imagens = document.querySelectorAll('.imagens');
// const text = document.querySelectorAll('.text');
// const btnBack = document.getElementById('back-button');
// const btnNext = document.getElementById('next-button');

// // passador do slide (soma=passa, sub=volta)
// let currentSlide = 0;

// // função de esconder o carrossel
// function hideImagens () {
//     imagens.forEach(item => item.classList.remove('on'))
//     text.forEach(item => item.classList.remove('on'))
// }

// // função de mostrar o carrossel
// function showImagens() {
//     imagens[currentSlide].classList.add('on')
//     text[currentSlide].classList.add('on')
// }

// // função de avançar
// function nextImagem() {
//     hideImagens()
//     if(currentSlide === imagens.length -1) {
//         currentSlide = 0
//     } else {
//         currentSlide++
//     }
//     showImagens()
// }

// // função de voltar
// function backImagem() {
//     hideImagens()
//     if(currentSlide === 0) {
//         currentSlide = imagens.length -1
//     } else {
//         currentSlide--
//     }
//     showImagens()
// }

// btnBack.addEventListener('click', nextImagem)
// btnNext.addEventListener('click', backImagem)

// console.log(imagens)