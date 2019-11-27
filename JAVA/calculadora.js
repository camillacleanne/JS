var valor = prompt("Digite o valor inteiro");
var htmlgerado="";
var nlinha = 0;
var csslinha;

for (i=0; i<= valor; i++)
{
    if (i%2!=0)
    {
        var csslinha = "linha_" +nlinha;

        htmlgerado += "<div class='row '> ";
        htmlgerado += "<div class= 'col-sm-12'>"+i+"</div>";
        htmlgerado+= "</div>";
        
        nlinha= (nlinha+1)%3;
    }
}
document.getElementById("impar").innerHTML = htmlgerado;