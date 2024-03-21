import * as isoly from "isoly"
import { Merchant } from "./Merchant"
import { Meta } from "./Meta"

export interface Base {
	account: string
	amount: number | { date: isoly.Date; amount: number }[]
	currency: isoly.Currency
	merchant: Merchant
	meta: Meta
}
