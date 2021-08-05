import * as isoly from "isoly"
import { Status as TransactionStatus } from "./Status"
import { Type as TransactionType } from "./Type"

export interface Transaction {
	type: TransactionType
	status: TransactionStatus
	timestamp: isoly.Date
	currency: isoly.Currency
	amount: number
	affectsAccountBalance: boolean
	accountBalance: number
	bookingDetails: { merchantName: string }
	cardId: string
	unused: boolean
	pending: boolean
	settlementTimestamp?: isoly.Date
}

export namespace Transaction {
	export function is(value: Transaction | any): value is Transaction {
		return (
			typeof value == "object" &&
			TransactionType.is(value.type) &&
			TransactionStatus.is(value.status) &&
			isoly.Date.is(value.timestamp) &&
			isoly.Currency.is(value.currency) &&
			typeof value.amount == "number" &&
			typeof value.affectsAccountBalance == "boolean" &&
			typeof value.accountBalance == "number" &&
			typeof value.bookingDetails == "object" &&
			typeof value.bookingDetails.merchantName == "string" &&
			typeof value.cardId == "string" &&
			typeof value.unused == "boolean" &&
			typeof value.pending == "boolean" &&
			(value.settlementTimestamp == undefined || isoly.Date.is(value.settlementTimestamp))
		)
	}
	export type Type = TransactionType
	export namespace Type {
		export const is = TransactionType.is
	}
	export type Status = TransactionStatus
	export namespace Status {
		export const is = TransactionStatus.is
	}
}
