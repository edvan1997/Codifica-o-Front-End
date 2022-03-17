
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

/*NOTIFICAÇÂO*/
let notifica = document.querySelector('.global-notificacao')
let sino = document.querySelector('.fa-bell')
let fecha = document.querySelector('.fa-x')

sino.addEventListener('click', function(){
    notifica.style.display = 'block'
})
fecha.addEventListener('click', function(){
    notifica.style.display = 'none'
})

/* BUSCADOR*/
let busca = document.querySelector('.busca')
let plus = document.querySelector('.fa-plus')

plus.addEventListener('click', function(){
    busca.classList.toggle('busca')
   
})

// plus.addEventListener('click', function(){
//     busca.style.display = 'block'
// })
// plus.addEventListener('click', function(){
//     busca.style.display = 'none'
// })

/*PERFIL CONFIG*/
let perfil = document.querySelector('.perfil-config')
let butao = document.querySelector('.top-nav-perfil')
let sair = document.querySelector('.x1')

butao.addEventListener('click', function(){
    perfil.style.display = 'block'        
})
sair.addEventListener('click', function(){
    perfil.style.display = 'none'
})