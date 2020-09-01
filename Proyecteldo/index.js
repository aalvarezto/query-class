const _ = require("rambda")
const myTools = require("./myTools")
const { peek, memo } = myTools
const { compose } = _

const sum = x => y => x + y
const storage = memo()

const addTwo = sum(2)

const arr = [1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5]

const addedArray = arr.map(storage(addTwo))

peek(addedArray)
