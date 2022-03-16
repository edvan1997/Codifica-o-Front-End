// document.addEventListener('DOMContentLoaded', function(){
//     var modeSwitch = document.querySelector('.white')

//     modeSwitch.addEventListener('click', function(){
//         document.documentElement.classList.toggle('dark')
//         modeSwitch.classList.toggle('active')
//     });
// })
var ativo = 0
var modeSwitch = document.querySelector('.noturno')
if(ativo == 0){
    modeSwitch.addEventListener('click', function(){
        document.documentElement.classList.toggle('dark')
        document.querySelector('body').classList.toggle('active')
        document.querySelector('.noturno').classList.toggle('active')
        document.querySelector('.right-side').classList.toggle('active')
        document.querySelector('.left-side').classList.toggle('active')
        document.querySelector('.top-nav-bar').classList.toggle('active')
        document.querySelector('.links').classList.toggle('active')
        document.querySelector('.boxes').classList.toggle('active')
        document.querySelector('.buscador').classList.toggle('active')
        var icone =document.querySelectorAll('.side-icons')
        for(i = 0; i < icone.length; i++){
            icone[i].classList.toggle('active')
        }
        
        
        
        
        
    });
    ativo = 1
} else {
    modeSwitch.addEventListener('click', function() {
        modeSwitch.classList.remove('active')
    })
    ativo = 0
}


