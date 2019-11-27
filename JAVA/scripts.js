var salmin = prompt("Digite valor do salario mínimo");

var qtdekw = prompt ("Digite a quantidade de kw");

var valor1kw = salmin / 700;
var valortotal = valor1kw * qtdekw;
var valordesc = valortotal * 0.09;

document.write ("Valor de 1 kw: R$ " +valor1kw+ "<br/>");
document.write ("Valor total da conta: R$ " +valortotal+ "<br/>");
document.write ("Valor 10% de desconto: R$ " +valordesc+ "<br/>");

console.log ("Valor de 1 kw R$" +valor1kw);
console.log("Valor total da conta: R$" +valortotal);
console.log ("Valor com 10% de desconto: R$" +valordesc);