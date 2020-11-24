"use strict"

import data from "./database.js"
import Query from "./Query.js"

const foo = Query("This is my query")
	.select("City", "FirstName").from(data)
	.where(data => data.id < 3).fold()

console.log(foo)

// const bar = Query("This is my query of all")
// 	.select().from(data)

// console.log(bar)

