import * as gracely from "gracely"
import * as isoly from "isoly"
import * as rest from "cloudly-rest"
import { Account } from "../Account"

export interface Transaction {
	// reference: { provider: Provider; id: string; account: string }
	time: isoly.DateTime
	amount: number
	// description: string
	balance: number
}
export class Transaction extends rest.Collection<gracely.Error> {
	async list(account: Account | string, start: isoly.Date, end: isoly.Date): Promise<Transaction[] | gracely.Error> {
		return await this.client.get<Transaction[]>(
			`account/${typeof account == "string" ? account : account.id}/transaction?start=${start}&end=${end}`
		)
	}
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
