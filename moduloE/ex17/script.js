function tabuada() {
     let number  = document.getElementById("inpN")
     let tab = document.getElementById("quadro")
     if (number.value.length == 0) {
        window.alert('[ERRO] Por favor digite um número!')
     } else {
        let n = Number(number.value)
        let c = 1
        tab.innerHTML = ""
        for(c = 1; c <= 10 ; c++) {
            let item = document.createElement("option")
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
        }
     }
}