"use strict"
import R, { filter, toLower } from "ramda"
const Query = x => {
	if (typeof x === "string") x = {label: x}

	return {
		select: (...props) => Query({...x, ...{props}}),
		from: data => Query({...x, ...{data}}),
		where: predicate => Query({...x, ...{data: x.data.filter(predicate)}}),
		fold2: () => x,
		fold: () => {
			console.log(x.label)
			x.props.map(v => v)
		},
	}
}

export default Query
