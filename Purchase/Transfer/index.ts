import * as isoly from "isoly"
import { Base } from "../Base"

export interface Transfer extends Base {
	id: string
	type: "transfer"
	amount: number
	currency: isoly.Currency
	meta: Record<string, any>
}
