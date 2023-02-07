let agr = new Date();
let diaSem = agr.getDay();
console.log(diaSem)
/* 
0 = Domingo
1 = Segunda
2 = Terça
3 = Quarta
4 = Quinta 
5 = Sexta 
6 = Sábado
 */
switch(diaSem){
    case 0:
        console.log("Dom");
        break;
    case 1:
        console.log("Seg");
        break;
    case 2:
        console.log("Ter");
        break;
    case 3:
        console.log("Qua");
        break;
    case 4:
        console.log("Qui");
        break;
    case 5:
        console.log("Sex");
        break;
    case 6:
        console.log("Sáb");
        break;
    default:
        console.log("Erro!!")
        break
}