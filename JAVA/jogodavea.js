var vezJogador = 1;

function jogar(idDiv){
var textoInterno = document.getElementById(idDiv).innerHTML
if(textoInterno==""){
    if(vezJogador ==1){
        document.getElementById(idDiv).innerHTML= "X";
        vezJogador=2;
    }
    else{
        document.getElementById(idDiv).innerHTML = "O";
        vezJogador=1;
    }
    
}
}