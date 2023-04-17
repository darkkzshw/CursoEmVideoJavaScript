/*-----------------------------------------
1. Faça um programa que exiba os números 
de 1 a 10 utilizando um loop while.


let a = 1
while (a <= 10) {
    console.log(`Imprimindo número ${a}`)
    a++
}
-----------------------------------------*/

/*-----------------------------------------
2. Faça um programa que exiba os números pares
 entre 1 e 20 utilizando um loop for.


for (let b = 1;b <= 20;b++) {
    let modB = b % 2
    modB === 0 ? console.log(`Imprimindo par ${b}`) : null
}
-----------------------------------------*/

/*-----------------------------------------
3. Faça um programa que calcule a soma dos 
números de 1 a 100 utilizando um loop while.


let c = 0
let contador = 1

while (contador <= 100) {
    c += contador
    contador++
}   

console.log (`A soma dos números de 1 a 100 é ${c}`)
-----------------------------------------*/

/*-----------------------------------------
4. Faça um programa que solicite ao usuário que digite um 
número e exiba todos os números pares entre 1 e esse
 número utilizando um loop for.

let contador = 0 //Aqui vai o contador
    //Aqui vai o número
for (let d = 13;contador <= d; contador++) {
    let modCont = contador % 2 //Módulo do contador
    modCont === 0 ? console.log (`Aqui vai o número par ${contador}`): null
}
-----------------------------------------*/

/*-----------------------------------------
5. Faça um programa que solicite ao usuário que digite um
número e exiba todos os números ímpares entre 1 e esse
número utilizando um loop while.


let cont = 0
for (let e = 31;cont <= e;cont++) {
    let modCont = cont % 2
    modCont !== 0 ? console.log (`Aqui vai o número ímpar ${cont}`) : null
}
-----------------------------------------*/

/*-----------------------------------------  
6. Faça um programa que calcule a média dos números de
1 a 10 utilizando um loop for.

contador = 0

for (let f = 1;f <= 10;f++) {
    contador += f
    media = contador / 10
}


console.log ('A média dos números de 1 a 10 é ' + media)
-----------------------------------------*/

/*-----------------------------------------
7. Faça um programa que exiba a tabuada de multiplicação 
de um número digitado pelo usuário, utilizando um loop for.


let c = 1
for (let g = 7;c <= 10;c++) {
    let res = g * c
    console.log (`${g} x ${c} = ${res}`)
}
-----------------------------------------*/

/*-----------------------------------------
8. Faça um programa que exiba a sequência de
Fibonacci até o décimo termo utilizando um loop while.


let h = 0
let i = 1
let nums = 0
while (nums < 10) {
    console.log(h)
    let prox = h + i
    h = i
    i = prox
    nums++
}
-----------------------------------------*/

/*-----------------------------------------
9. Faça um programa que exiba os números primos 
entre 1 e 50 utilizando um loop for.


for (let j = 2; j <= 50; j++) {
    let primo = true

    for (let k = 2; k < j; k++) {
        if (j % k == 0) {
            primo = false
            break
        }
    }

    if (primo) {
        console.log(j)
    }
}
-----------------------------------------*/

/*-----------------------------------------
Faça um programa que exiba a soma dos números primos 
entre 1 e 100 utilizando um loop while.


let l = 2
let soma = 0

while (l <= 100) {
    let primo = true

    for (let m = 2; m < l; m++) {
        if (l % m == 0) {
            primo = false
            break
        }
    }

    if (primo) {
        soma += l
    }
    l++
}

console.log('A soma dos números primos entre 1 e 100 é: ', soma)

-----------------------------------------*/
