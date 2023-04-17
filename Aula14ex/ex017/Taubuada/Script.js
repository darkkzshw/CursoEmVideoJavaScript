let num = document.getElementById('num')
let tab = document.getElementById('tab')

function gerar() {
    if (num.value.length == 0) {
        alert ('[ERRO] Digite um número')
    } else {
        tab.innerHTML = ''
        let c = 1
        for (n = Number(num.value);c <= 10; c++) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n * c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}
