function verificar() {
 let inicio = Number.parseFloat(document.getElementById("inicio").value)
 let passo = Number.parseFloat(document.getElementById("passo").value)
 let fim = Number.parseFloat(document.getElementById("fim").value)
 let res = document.getElementById("res")
    if (isNaN(inicio) || isNaN(passo) || isNaN(fim)) {
    window.alert("[ERRO] dados obrigatórios não informados!")
 } else if ( passo == 0) {
    res.innerHTML = `Vamos contar de ${inicio} até ${fim} pulando de ${passo}. <br>`
    for(let c = inicio; c <= fim; c ++ ) {
        res.innerHTML += `👉${c}<br>`
    } res.innerHTML += "🏴<br>"
    res.innerHTML += "Impossível contar com o incremento 0 <br> consideramos 1. <br>"
 } else {
    if (inicio < fim) {
    res.innerHTML = `Vamos contar de ${inicio} até ${fim} pulando de ${passo}. <br>`
    for(c = inicio; c <= fim; c += passo) {
        res.innerHTML += `👉${c}<br>`
        } 
    } else { 
        res.innerHTML = `Vamos contar de ${inicio} até ${fim} pulando de ${passo}. <br>`
        for (c = inicio; c >= fim; c -= passo) {
            res.innerHTML += `👉${c}<br>`
        }
    }
    res.innerHTML += "🏴<br>"
 }
}