import * as isoly from "isoly"
import { TransactionType } from "./TransactionType"

export interface Transaction {
	type: TransactionType
	postingDate: isoly.DateTime
	transactionDate: isoly.DateTime
	currency: isoly.Currency
	amount: number
	availableBalance: number
	actualBalance: number
	description?: string
}

export namespace Transaction {
	export function is(value: any | Transaction): value is Transaction {
		return (
			typeof value == "object" &&
			TransactionType.is(value.type) &&
			isoly.DateTime.is(value.postingDate) &&
			isoly.DateTime.is(value.transactionDate) &&
			isoly.Currency.is(value.currency) &&
			typeof value.amount == "number" &&
			typeof value.availableBalance == "number" &&
			typeof value.actualBalance == "number" &&
			(value.description == undefined || typeof value.description == "string")
		)
	}
}
