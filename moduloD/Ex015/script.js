function verificar() {
   let data = new Date();
   let ano = data.getFullYear();
   let formAno = document.getElementById("txtano");
   var res = document.querySelector("div#res")
   if (formAno.value.length == 0 || formAno.value > ano) {
        window.alert("[ERRO] Verifique os dados e tente novamente!")
   } else {
        let fsex = document.getElementsByName("radsex");
        let idade = ano - Number(formAno.value);
        let gênero = ""
        let img = document.createElement('img')
        img.setAttribute("id", "foto")
        if (fsex[0].checked) {
            gênero = "Homem";
            if (idade >= 0 && idade < 13) {
                /* bebê */
                img.setAttribute("src", "homembebe.jpg")
            } else if (idade < 22) {
                /* jovem */
                img.setAttribute("src", "homemjovem.jpg")
            } else if ( idade < 60) {
                /* adulto */
                img.setAttribute("src", "homemadulto.jpg")
            } else {
                /* idoso */
                img.setAttribute("src", "homemidoso.jpg")
            }
        } else {
            gênero = "Mulher";
            if (idade >= 0 && idade < 13) {
                /* bebê */
                img.setAttribute("src", "mulherbebe.jpg")
            } else if (idade < 22) {
                /* jovem */
                img.setAttribute("src", "mulherjovem.jpg")
            } else if ( idade < 60) {
                /* adulta */
                img.setAttribute("src", "mulheradulta.jpg")
            } else {
                /* idosa */
                img.setAttribute("src", "mulheridosa.jpg")
            }
        }
        res.style.textAlign = "center"
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img);
   }
}