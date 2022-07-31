// function que identifica dividendo e divisor, ideal para descobrir números pares e ímpares.


function divisao (dividendo, divisor) {
    console.log("Resultado: " + Math.floor(dividendo/divisor));
    console.log(`Resto: ${dividendo % divisor}`)
}

divisao(21, 4)