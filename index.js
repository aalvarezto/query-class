const data = require("./database")
const Query = require("./Query")

const foo = Query("This is my query")
	.select("City", "FirstName")
	.from(data)

const bar = Query("This is my query of all")
	.select()
	.from(data)

console.log(foo)
console.log(bar)
