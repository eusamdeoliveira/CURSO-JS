function carregar() {
let msg = window.document.getElementById('msg');
let img = window.document.getElementById("imagem");
let dia = new Date();
let hr = dia.getHours(); 
msg.innerHTML = `Agora são ${hr} horas.`
if (hr >= 0 && hr < 12) {
    img.src = "fotomanha.png";
    document.body.style.background = "#DDCAA2"
} else if (hr >= 12 && hr < 18) {
    img.src = "fototarde.png";
    document.body.style.background = "#E5684C"
} else {
    img.src = "fotonoite.png";
    document.body.style.background = "#2B3A51 "
}
    
}