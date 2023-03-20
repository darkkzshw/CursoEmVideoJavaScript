function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fAno = document.getElementById('txtano')
    let res = document.getElementById('res')
    if (fAno.value.length == 0 || fAno.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fAno.value)
        let img = document.createElement('img')
        img.setAttribute ('id', 'foto')
        if (fsex[0].checked) {
            if (idade >= 0 && idade < 14) {
                //criança
                img.setAttribute('src', 'foto-bebe-m.png')
                res.innerHTML = `Identificamos uma Criança com ${idade} anos.`
            } else if (idade < 23) {
                //jovem
                img.setAttribute('src', 'foto-jovem-m.png')
                res.innerHTML = `Identificamos um Jovem com ${idade} anos.`
            } else if (idade < 60) {
                //adulto
                img.setAttribute('src', 'foto-adulto-m.png')
                res.innerHTML = `Identificamos um Homem com ${idade} anos.`
            } else {
                //idoso
                img.setAttribute('src', 'foto-idoso-m.png')
                res.innerHTML = `Identificamos um Senhor com ${idade} anos.`
            }
        } else if (fsex[1].checked) {
            res.innerHTML = `Identificamos uma Mulher com ${idade} anos.`
            if (idade >= 0 && idade <14) {
                //criança
                img.setAttribute('src', 'foto-bebe-f.png')
                res.innerHTML = `Identificamos uma Criança com ${idade} anos.`
            } else if (idade < 23) {
                //jovem
                img.setAttribute('src', 'foto-jovem-f.png')
                res.innerHTML = `Identificamos uma Jovem com ${idade} anos.`
            } else if (idade < 60) {
                //adulto
                img.setAttribute('src', 'foto-adulto-f.png')
                res.innerHTML = `Identificamos uma Mulher com ${idade} anos.`
            } else {
                //idoso
                img.setAttribute('src', 'foto-idoso-f.png')
                res.innerHTML = `Identificamos uma Senhora com ${idade} anos.`
            }
        }
        res.style.textAlign = 'center'
        res.appendChild(img)
        
    }
}