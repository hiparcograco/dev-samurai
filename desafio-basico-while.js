var soma = 0;
var num;

while (true){

    num = prompt("Valor atual: " + soma + "\nDigite um número para somar ou N para interromper a soma");

    if (num == 'N'){
        break;
    }
    else{
        soma += Number(num);
    }
}

alert("O resultado é: " + soma);