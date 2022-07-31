// Calculadora onde você escolhe a operação que será realizada no argumento da função.



function calcularOperacoes (number1, number2, sinal) {
    if (sinal == "+") {
        console.log(number1 + number2);
    } else if (sinal == "-") {
        console.log(number1 - number2);
    } else if (sinal == "*") {
        console.log(number1 * number2 ) 
        } else {
            console.log(number1 / number2);
        }
};
 
calcularOperacoes(100, 20, "*")


