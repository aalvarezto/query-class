const peek = element => {
	console.log(element)
	return element
}

const memo = (cache = new Map()) => fn => element =>
	cache.has(element)
		? cache.get(element)
		: cache.set(element, fn(element)).get(element)

module.exports = { peek, memo }
