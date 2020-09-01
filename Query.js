const select = require("./select")

const Query = x => {
	if (typeof x === "string") console.log(x)

	return {
		select,
	}
}

module.exports = Query
