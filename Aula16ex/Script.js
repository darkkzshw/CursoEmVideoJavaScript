let sel = document.getElementById('sel')
let num = document.getElementById('num')
let res = document.getElementById('analise')
let pars = document.getElementById('teste')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function add() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        let val = document.createElement('option')
        val.text = `Valor ${num.value} adicionado`
        sel.appendChild(val)
        res.innerHTML = ''
        valores.push(Number(num.value))

    } else {
        alert ('Valor inválido ou já encontrado na lista')
    }
    num.value = ''
    num.focus()
}

function maiorNumero(array) {
    let maiorN = array[0]
    for (c = 1; c < array.length; c++) {
        if (array[c] > maiorN) {
            maiorN = valores[c]
        }    
    }
    return maiorN
}

function menorNumero(array) {
    let menorN = array[0]
    for (c = 1; c < array.length; c++) {
        if (array[c] < menorN) {
            menorN = array[c]
        }
    }
    return menorN
}

function somar(array) {
    let soma = 0
    for (let c = 0;c < array.length; c++) {
        soma += array[c]
    }
    return soma
}   


function analisar() {
    if (valores.length == 0) {
        alert ('Por favor, adicione um número na lista acima')
    } else {
    let maiorValor = maiorNumero(valores)
    let menorValor = menorNumero(valores)
    let som = somar(valores)
    let média = som / valores.length
    res.innerHTML = ''
    res.innerHTML += `Ao todo, temos ${valores.length} números cadastrados. <br>`
    res.innerHTML += `O maior valor informado foi ${maiorValor}.<br>`
    res.innerHTML += `O menor valor informado foi ${menorValor}.<br>`
    res.innerHTML += `Somando todos os valores, temos ${som}. <br>`
    res.innerHTML += `A média dos valores digitados é ${média}.<br>`
    }
}