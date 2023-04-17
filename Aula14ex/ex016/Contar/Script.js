let ini = document.getElementById('inicio')
let fim = document.getElementById('fim')
let passos = document.getElementById('passos')
let res = document.getElementById('res')

function contar() {
    if (ini.value.length == 0 || fim.value.length == 0 || passos.value.length == 0) {
        alert ('ERRO')
    } else {
        res.innerHTML = 'Contando: '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passos.value)

        for (c = i; c <= f ; c += p) {
            res.innerHTML += `${c}👉 `
        }
        res.innerHTML += '🏁'

    }
}