var horas = new Date().getHours()
var minutos = new Date().getMinutes()
var segundos = new Date().getSeconds().toFixed(0)
var hora = horas

if (hora < 12) {
    console.log(`Agora são exatamente ${hora}:${minutos}:${segundos} AM.`)
} else {
    console.log(`Agora são exatamente ${hora}:${minutos}:${segundos} PM.`)
}

if (hora <= 5) {
    console.log('Boa madrugada')
} else if (hora < 12) {
    console.log('Bom dia')
} else if (hora <= 19) {
    console.log('Boa tarde')
} else if (hora <= 24) {
    console.log('Boa noite')
} else {
    console.log('Horário inválido')
}