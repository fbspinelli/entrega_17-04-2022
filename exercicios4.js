/*
4. Escreva um script que apresenta as seguintes operações para o usuário:
1- Soma
2- Subtração
3-Multiplicação
4- Divisão
5- Sair
O programa deve ficar em loop até que o usuário digite 5. Se o usuário digitar uma opção
inválida, o programa deve informá-lo disso e mostrar o menu de opções novamente. Use
o objeto JSON do exercício 4 para realizar as operações aritméticas.
*/
const readline = require('readline-sync')
var escolha = "";

const soma = () => {
    x = parseFloat(readline.question("Digite o primeiro numero: "));
    y = parseFloat(readline.question("Digite o segundo numero: "));
    console.log("O valor da soma e: " + (x + y));
};
const subtracao = () => {
    x = parseFloat(readline.question("Digite o primeiro numero: "));
    y = parseFloat(readline.question("Digite o segundo numero: "));
    console.log("O valor da subtracao e: " + (x - y));
};
const multiplicacao = () => {
    x = parseFloat(readline.question("Digite o primeiro numero: "));
    y = parseFloat(readline.question("Digite o segundo numero: "));
    console.log("O valor da multiplicacao e: " + (x * y));
};
const divisao = () => {
    x = parseFloat(readline.question("Digite o primeiro numero: "));
    y = parseFloat(readline.question("Digite o segundo numero: "));
    console.log("O valor da divisao e: " + (x / y));
};
const menu = 
`Digite umas das opcoes a seguir:
1- Soma 
2- Subtracao 
3-Multiplicacao 
4- Divisao 
5- Sair \n`

do{
    escolha = parseFloat(readline.question(menu));
    if (escolha == 1){
        soma()
    }
    if (escolha == 2){
        subtracao()
    }
    if (escolha == 3){
        multiplicacao()
    }
    if (escolha == 4){
        divisao()
    }
    if (escolha < 1 || escolha > 5 || isNaN(escolha) ){
        console.log("Opcao invalida");
    }
    
    
}while(escolha !== 5)


