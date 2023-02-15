let num = [5, 8, 2, 9, 3]
num.sort()
num.push(1)
console.log(num)
console.log(`O VETOR TEM ${num.length} POSIÇÕES.`)
console.log(`O PRIMEIRO VALOR É ${num[0]}`)
/* for (c = 0; c < num.length; c++) {
  console.log(num[c]) } */

for (let pos in num) {
console.log(num[pos])
}

