/*
    1. Crie uma função que recebe dois números e retorna a soma deles.

function soma(n1=0, n2=0) {
    return n1 + n2
} console.log(soma(1,5))

1. ArrowFunction

let somar = (a,b) => {
    return a + b
} 
console.log(somar(1,5))
*/

/*
    2. Crie uma função que recebe uma palavra e retorna a mesma palavra escrita ao contrário.

function inverterPalavra(palavra) {
    let palavraInvertida = ''
    for (let c = palavra.length - 1;c >= 0; c--) {
        palavraInvertida += palavra[c]
    }
    return palavraInvertida
}   let pInv = inverterPalavra('Teste') 
    console.log(pInv)
*/

/*
    3. Crie uma função que recebe um número e retorna true se o número é par e false se o número for ímpar

function parimp(n) {
    if (n % 2 == 0) {
        return true //PAR
    } else {
        return false //ÍMPAR
    }
}   console.log(parimp(10))
*/
/*
    4. Crie uma função que recebe um array de números e retorna o maior número do array

function maiorNumero(array) {
    
    let maiorN = array[0]
    for (let c = 1;c < array.length;c++) {
        if (array[c] > maiorN) {
            maiorN = array[c]
        }
    }
    return maiorN
} let numeros = [5, 4, 3, 6, 2, 17]
let maior = maiorNumero(numeros)
console.log(maior)
*/


/*
    5. Crie uma função que recebe um objeto com as propriedades
    "nome" e "idade" e retorna uma string no formato "Meu nome é
    [Nome] e tenho [Idade] anos"


function apresentação(nome, idade) {
    return `Meu nome é ${nome} e tenho ${idade} anos`
} console.log(apresentação('Gabriel', 18))
*/

