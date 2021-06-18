import * as isoly from "isoly"
import { ItemStatus } from "./ItemStatus"
import { ItemType } from "./ItemType"

export interface Item {
	transactionType: ItemType
	transactionStatus: ItemStatus
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

export namespace Item {
	export function is(value: Item | any): value is Item {
		return (
			typeof value == "object" &&
			ItemType.is(value.transactionType) &&
			ItemStatus.is(value.transactionStatus) &&
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
}
