let preço = Number(prompt('Qual o preço do produto?'))
let vista = preço*0.9
let prazo = preço/3
alert('O preço a vista é R$ '+ vista.toFixed(2) + '\nOu parcelado em até 3x de R$ ' + prazo.toFixed(2))