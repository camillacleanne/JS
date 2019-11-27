/*17. Faça um programa que leia o salário de uma pessoa e calcule o imposto devido,
segundo as regras:
a. se o salário é menor que $1000, então a pessoa está isenta de impostos
b. se o salário está entre $1000 e $2500, desconte 12,5% do salário
c. se o salário está entre $2500 e $5000, desconte 25% do salário
d. se o salário for maior que $5000, desconte um valor fixo de $1300.*/

function calcularImposto() {
var imposto=0
var salario = document.getElementById("salario").value


    if (salario < 1000) {
        document.write("isento")
    }
    else {
        if (salario >= 1000 && salario <= 2500) {
            imposto = salario * 0.125
            console.log
        }
        else {
            if (salario >= 2500 && salario < 5000) {
                imposto = salario * 0.25
            }
        else{
                imposto = 1300
        }
        }
    }
    return imposto;
}

function totalizarEExibir() {
    var salarioBruto =document.getElementById("salario").value;
    console.log("Salário bruto obtido = " +salarioBruto);
    var imposto = calcularImposto();
    console.log ("imposto devido   ="+imposto);
    var salarioLiquido = salarioBruto - imposto;
    document.getElementById ("Resultado").innerHTML= "Imposto Devido R$ " 
    +imposto+ "<br/>" +"Salario Liquido R$ " +salarioLiquido+ "<br/>";
}