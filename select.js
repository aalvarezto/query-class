const R = require("rambda")
const { map, compose, toLower } = R
const { from } = Array

const lower = map(toLower)

const propsOrAll = (cols, row) =>
	cols.length ? cols : Object.keys(row)

const storeInMapOf = cols =>
	map(
		row =>
			new Map(
				from(
					map(
						col => [col, row[col]],
						propsOrAll(cols, row)
					)
				)
			)
	)

const select = (...cols) => ({
	from: storeInMapOf(lower(cols)),
})

module.exports = select
