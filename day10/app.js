var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');


// Faça um programa que leia o nome de um vendedor, 
// o seu salário fixo e o total de vendas efetuadas por ele no mês (em dinheiro). 
// Sabendo que este vendedor ganha 15% de comissão sobre suas vendas efetuadas,
//  informar o total a receber no final do mês, com duas casas decimais.

var nome = lines.shift();
var salario  = parseInt(lines.shift());
var vendas = parseFloat(lines.shift());
var total = vendas*0.15+salario
console.log("TOTAL = R$",total.toFixed(2));
