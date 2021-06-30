import * as isoly from "isoly"

export interface Base {
	id: string
	currency: isoly.Currency
	meta: Record<string, any> //category?
}
