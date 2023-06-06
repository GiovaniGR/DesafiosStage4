/*Nesse desafio, você irá solicitar ao usuário que ele insira 
**dois números** e, a partir daí, calcular:

- [ ]  A soma dos dois números;
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números;

- [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
- [ ]  Verifique se os dois números inseridos são iguais
 ~~(ou diferentes)~~.
*/

let firstNumber = Number(prompt("Insira o primeiro número:"))
let secondNumber = Number(prompt("Insira o segundo número:"))

const sum = firstNumber + secondNumber
const sub = firstNumber - secondNumber
const mult = firstNumber * secondNumber
const div = firstNumber / secondNumber
const restDiv = firstNumber % secondNumber


alert(" O resultado da soma é: " + sum)
alert(" O resultado da subtração é: " + sub)
alert(" O resultado da multiplicação é: " + mult)
alert(" O resultado da divisão é: " + div)
alert(" O resto da divisão é: " + restDiv)

if(sum % 2 == 0){
  alert("O número é par")
}else{
  alert("O número é ímpar")
}

if(firstNumber == secondNumber){
  alert("Os números são iguais")
}else{
  alert("Os números são diferentes")
}