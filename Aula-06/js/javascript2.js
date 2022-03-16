
let quadrado = document.querySelectorAll('.boxes')
let seleciona_quadrado = document.querySelector('.lef-icon-2')
let seleciona_lista = document.querySelector('.lef-icon-1')

seleciona_lista.addEventListener('click', function(){
    for(i = 0; i < quadrado.length; i++){
        quadrado[i].classList.remove('boxes')
        quadrado[i].classList.add('retangulo')
    }
})
seleciona_quadrado.addEventListener('click', function(){
    let retangulo = document.querySelectorAll('.retangulo')
    for(i = 0; i < retangulo.length; i++){
        retangulo[i].classList.remove('retangulo')
        retangulo[i].classList.add('boxes')
    }
})


let notifica = document.querySelector('.global-notificacao')
let sino = document.querySelector('.fa-bell')
let fecha = document.querySelector('.fa-x')

sino.addEventListener('click', function(){
    notifica.style.display = 'block'
})
fecha.addEventListener('click', function(){
    notifica.style.display = 'none'
})