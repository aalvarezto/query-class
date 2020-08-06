const Query = require("./Query")
const autos = require("./data")

const listaDeAutos = new Query(autos)

listaDeAutos.selectAll()
listaDeAutos.customFormatQuery()
listaDeAutos.currentQuery.forEach(element => console.log(element))
listaDeAutos.resetQuery()

console.log("=============================")
listaDeAutos.selectAll()
console.log(
	`Vehículo más caro: ${listaDeAutos.mostExpensive.marca} ${listaDeAutos.mostExpensive.modelo}`
)
console.log(
	`Vehículo más barato: ${listaDeAutos.cheapest.marca} ${listaDeAutos.cheapest.modelo}`
)
listaDeAutos
	.modeIncludes("y")
	.forEach(element =>
		console.log(
			`Vehículo que contiene en el modelo la letra ‘Y’: ${
				element.marca
			} ${element.modelo} \\${Query.formatMoney(element.precio)}`
		)
	)
listaDeAutos.resetQuery()

console.log("=============================")
listaDeAutos.selectAll()
listaDeAutos.orderByPriceDesc()
console.log("Vehículos ordenados por precio de mayor a menor:")
listaDeAutos.currentQuery.forEach(element =>
	console.log(element.marca, element.modelo)
)
listaDeAutos.resetQuery()
