function contar() {

let ini = document.getElementById('inicio').value
let fim = document.getElementById('fim').value
let pas = document.getElementById('passos').value
let res = document.getElementById('conta')

    if (ini.length == 0 || fim.length == 0 || pas.length == 0) {
    window.alert('[ERRO]')
    } else {
        res.innerHTML = 'Contando:'
        let i = Number(ini)
        let f = Number(fim)
        let p = Number(pas)
        
        for (c = i; c <= f; c += p) {
            res.innerHTML += `${c}👉`
        }
        res.innerHTML += '🏁'


    }

}