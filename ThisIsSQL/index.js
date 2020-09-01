const R = require("rambda")
const { trim, split, compose, map } = R

const casesLoop = x => {
	switch (R.toLower(x)) {
		case "int":
			return Number
		default:
			return x
	}
}

const selectCases = ([key, x]) => [key, casesLoop(x)]

const parseValue = map(
	compose(selectCases, split(" "), trim)
)

const formatString = compose(parseValue, split(","))

const createTable = tableName => str =>
	new Map()
		.set("tableName", tableName)
		.set(tableName, new Map(formatString(str)))

let str =
	"id SERIAL, name Text, email VARCHAR(255), age INT"

peek(createTable("users")(str))

function peek(x) {
	console.log(x)
	return x
}
