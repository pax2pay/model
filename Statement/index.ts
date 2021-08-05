import * as isoly from "isoly"
import { Event as StatementEvent } from "./Event"
import { Transaction as StatementTransaction } from "./Transaction"

export interface Statement {
	account: string
	start: isoly.Date
	end: isoly.Date
	balance: { open: number; close: number }
	transactions: (StatementTransaction | StatementEvent)[][]
}

export namespace Statement {
	export function is(value: Statement | any): value is Statement {
		return (
			typeof value == "object" &&
			typeof value.account == "string" &&
			isoly.Date.is(value.from) &&
			isoly.Date.is(value.end) &&
			typeof value.balance == "object" &&
			typeof value.balance.open == "number" &&
			typeof value.balance.close == "number" &&
			Array.isArray(value.transactions) &&
			value.transactions.every(
				(i: StatementTransaction | StatementEvent | any) => StatementTransaction.is(i) || StatementEvent.is(i)
			)
		)
	}
	export type Event = StatementEvent
	export namespace Event {
		export const is = StatementEvent.is
		export type Type = StatementEvent.Type
		export namespace Type {
			export const is = StatementEvent.Type.is
		}
		export type Status = StatementEvent.Status
		export namespace Status {
			export const is = StatementEvent.Status.is
		}
	}
	export type Transaction = StatementTransaction
	export namespace Transaction {
		export const is = StatementTransaction.is
		export type Status = StatementTransaction.Status
		export namespace Status {
			export const is = StatementTransaction.Status.is
		}
		export type Type = StatementTransaction.Type
		export namespace Type {
			export const is = StatementTransaction.Type.is
		}
	}
}
