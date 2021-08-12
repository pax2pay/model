import * as isoly from "isoly"
// import { Provider } from "../Provider"

export interface Transaction {
	// reference: { provider: Provider; id: string; account: string }
	time: isoly.DateTime
	amount: number
	// description: string
	balance: number
}

export namespace Transaction {
	export function is(value: any | Transaction): value is Transaction {
		return (
			typeof value == "object" &&
			// typeof value.reference == "object" &&
			// Provider.is(value.reference.provider) &&
			// typeof value.reference.id == "string" &&
			// typeof value.reference.account == "string" &&
			isoly.DateTime.is(value.date) &&
			typeof value.amount == "number" &&
			// typeof value.description == "string" &&
			typeof value.balance == "number"
		)
	}
}
