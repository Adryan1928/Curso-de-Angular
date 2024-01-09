let gasolina = 5
let etanol = 4
let isGasolina = false
let gastoMedio = 10
let distancia = 100

let precoGasto = distancia/gastoMedio * (isGasolina ? gasolina : etanol)

console.log(`Será gasto em combustível ${precoGasto.toFixed(2)} reais`)