
let tab = document.getElementById("lista")
let res = document.querySelector("div#resultado")
let valores = []
function inLista(número, list){
    return list.indexOf(número) !== -1
}
function listar() {
    let num = document.getElementById("formN")
    let n = num.value
    if (n.length == 0) {
        window.alert("[ERRO] Por favor digite um número entre 1 e 100!")
    } else if(n > 100 || n < 1) {
        window.alert("[ERRO] Valor digitado não está entre 1 e 100!")
    } else {
        let item = document.createElement("option")
        if (inLista(n,valores)){
            window.alert("[ERRO] Este número já foi listado!")
        } else {
        valores.push(n)
        item.text = `Número ${n} adicionado.`
        tab.appendChild(item)
        }
        num.value = "";
        num.focus()
    }
}

function finalizar() {
    let total = valores.length
    let maior = valores[0]
    let menor = valores[0]
    let soma = 0
    if (valores.length == 0){
        alert("[ERRO] Adicione valores antes de finalizar!")
    } else{
        for (let pos in valores) {
            soma += Number(valores[pos]);
         if (Number(valores[pos]) > maior) {
            maior = Number(valores[pos])
            }
         if (Number(valores[pos]) < menor) {
            menor = Number(valores[pos])
            }
        }
        let média = soma / total
        res.innerHTML = ""
        res.innerHTML += `<p>Sua lista tem ${total} números.<br></p>`
        res.innerHTML += `<p>O maior número da sua lista é ${maior}.<br></p>`
        res.innerHTML += `<p>O menor número da sua lista é ${menor}.<br></p>`
        res.innerHTML += `<p>A soma dos valores é ${soma}.<br></p>`
        res.innerHTML += `<p>A média dos valores é ${média}.</p>`
    }  
} 