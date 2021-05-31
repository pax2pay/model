import * as isoly from "isoly"

export interface Limit {
	currency: isoly.Currency
	limit: number
	type: "user" | "category"
}
export namespace Limit {
	export function is(value: Limit | any): value is Limit {
		return (
			typeof value == "object" &&
			isoly.Currency.is(value.currency) &&
			typeof value.limit == "number" &&
			(value.type == "user" || value.category == "category")
		)
	}
}
