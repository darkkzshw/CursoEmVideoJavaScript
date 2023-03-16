

function carregar() {
    let msg = document.getElementById('msg')
    let msg2 = document.getElementById('msg2')
    let img = document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora <= 4){
        img.src = 'fotomadrugada.png'
        document.body.style.background = '#26252b'
        msg2.innerHTML = 'Boa Madrugada'
    } else if (hora > 4 && hora < 12) {
        img.src = 'fotomanha.png'
        document.body.style.background = '#fed755'
        msg2.innerHTML = 'Bom Dia!'
    } else if (hora >= 12 && hora <= 19) {
        img.src = 'fototarde.png'
        document.body.style.background = '#fca140'
        msg2.innerHTML = 'Boa Tarde!'
    } else {
        img.src = 'fotonoite.png'
        document.body.style.background = '#584162'
        msg2.innerHTML = 'Boa Noite!'
    }
}