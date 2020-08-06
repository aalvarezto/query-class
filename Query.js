class Query {
	constructor(data) {
		this.data = data
		this.query = null
	}

	selectAll() {
		this.query = this.data
	}

	resetQuery() {
		this.query = null
	}

	get currentQuery() {
		return this.query
	}

	get mostExpensive() {
		try {
			return this.currentQuery.reduce((max, current) =>
				current.precio > max.precio ? current : max
			)
		} catch (e) {
			this.logError(e)
		}
	}

	get cheapest() {
		try {
			return this.currentQuery.reduce((max, current) =>
				current.precio < max.precio ? current : max
			)
		} catch (e) {
			this.logError(e)
		}
	}

	static formatMoney(number, floats = 2, comma = true) {
		if (typeof number !== "number" || Number.isNaN(number)) {
			return NaN
		}
		let dotComma = ","
		let separator = "."
		let [integers, float] = parseFloat(number, floats)
			.toFixed(floats)
			.split(".")

		if (!comma) {
			;[dotComma, separator] = [separator, dotComma]
		}

		if (floats < 1) {
			integers = parseInt(number, 10).toString()
			float = ""
			dotComma = ""
		}

		return "$" + addDotsEachThree(integers) + dotComma + float

		function addDotsEachThree(digits) {
			if (digits.length < 4) {
				return digits
			}

			return (
				addDotsEachThree(digits.slice(0, -3)) +
				separator +
				digits.slice(-3)
			)
		}
	}

	orderByPriceDesc() {
		try {
			this.query = this.currentQuery
				.slice()
				.sort((a, b) => b.precio - a.precio)
			return "Prices Order Descending"
		} catch (e) {
			this.logError(e)
		}
	}

	modeIncludes(str) {
		try {
			str = str.toUpperCase()

			return this.currentQuery.filter(element =>
				element.modelo.toUpperCase().includes(str)
			)
		} catch (e) {
			this.logError(e)
		}
	}

	formatCurrency(floats = 2, comma = true) {
		try {
			this.query = this.currentQuery.map(element => {
				return {
					...element,
					precio: Query.formatMoney(element.precio, floats, comma),
				}
			})
		} catch (e) {
			this.logError(e)
		}

		return "Currency Format Done!"
	}

	formatCylinder() {
		try {
			this.query = this.currentQuery.map(element => {
				if (element.cilindrada !== undefined) {
					return { ...element, cilindrada: element.cilindrada + "c" }
				}
				return { ...element }
			})
			return "Cylinder Format Done!"
		} catch (e) {
			this.logError(e)
		}
	}

	formatKeyValue() {
		try {
			this.query = this.currentQuery.map(element =>
				Object.keys(element).map(key => `${caps(key)}: ${element[key]}`)
			)

			return "Key and Value Format Done!"
		} catch (e) {
			this.logError(e)
		}
		function caps(str) {
			str = str.toLowerCase()
			return str.charAt(0).toUpperCase() + str.slice(1)
		}
	}

	formatOutputJoin(separator) {
		try {
			this.query = this.currentQuery.map(element =>
				element.join(separator)
			)
			return "Output Format Done!"
		} catch (e) {
			this.logError(e)
		}
	}

	customFormatQuery() {
		try {
			if (this.currentQuery === null) {
				throw new Error("No Selected Items")
			}
			this.formatCurrency()
			this.formatCylinder()
			this.formatKeyValue()
			this.formatOutputJoin(" // ")

			return "Log with Format Done!"
		} catch (e) {
			this.logError(e)
		}
	}

	logError(e) {
		console.error("")
		console.error(
			"****************************************************************"
		)
		console.error("Please select a valid Query.")
		console.error(
			"Try to reset current query with resetQuery() method and selectAll() after."
		)
		console.error(
			"****************************************************************"
		)
		console.error("")

		console.error(e)
	}
}

module.exports = Query
