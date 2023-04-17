let num = document.getElementById('num')
let lista = document.getElementById('lista')
let res = document.getElementById('res')
let valores = []

function isNumero(n) {
    if (n >= 1 && n <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(n) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(Number(num.value)) && !inLista(Number(num.value), valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} Adicionado`
        lista.appendChild(item)
    } else {
        alert ('Número inválido ou já encontrado na lista')
    }
    num.value = ''
    num.focus()
}

function finalizar() {

    let maiorN = valores[0] 
    let menorN = valores[0]
    let soma = 0
    if (valores.length == 0) {
        alert ('Por favor, adicione um número antes de finalizar')   
    } else {
        for (pos in valores) {
            if (maiorN < valores[pos]) {
                maiorN = valores[pos]
            }
            if (menorN > valores[pos]) {
                menorN = valores[pos]
            }
            soma += valores[pos]
            media = soma / valores.length
        }
    
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${valores.length} valores.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maiorN}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menorN}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
        res.innerHTML += `<p>A média dos valores digitador é ${media}</p>`
    }

}