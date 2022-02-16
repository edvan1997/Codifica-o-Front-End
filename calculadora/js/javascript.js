var input = document.querySelector(".visor"),
    btn = document.querySelectorAll(".valor"),
    operador = document.querySelectorAll(".operador");

    for(var i =0; i < btn.length; i++){
        document.onkeypress = function(event){
            var key = event.charCode;
            //console.log(key);
            for(var e = 0; e <= 10; e++){
                if(key===(48+e)){
                    input.innerHTML += e;
                }
            }
            switch(key){
                case 42:
                    input.innerHTML+= "*";
                break;
                case 43:
                    input.innerHTML+= "+";

                break;
                case 45:
                    
                    input.innerHTML+= "-";
                break;
                // case 46:
                    
                //     btn.innerHTML+= "."
                // break;
                case 47:
                    
                    input.innerHTML+= "/";
                break;
                case 61:
                    var equacao = input.innerHTML;
                    if(equacao){
                        try{
                            input.innerHTML = eval(equacao);
                        }catch(e){
                            alert('Deu um erro')
                        }
                    }
                    break;
                    case 67: // C maiusculo
                        input.innerHTML=""
                    break;
                    case 99: // c minusculo
                        input.innerHTML=""
                        break;
                        default:
                            console.log("teste")
                            break;
            }
        };
        btn[i].addEventListener('click', function(){
            var inputVal = this.innerHTML,
            btnVal=this.innerHTML;
            switch(btnVal){
                case "c":
                    input.innerHTML= "";
                    break;
                    case "=":
                        var equacao = inputVal;
                        if(equacao){
                            try{
                                input.innerHTML = eval(equacao);
                            }catch(e){
                                alert('Deu um erro')
                            }
                        }
                        break;
                        default:
                            input.innerHTML += btnVal;
                            break;
            }
        })
    }