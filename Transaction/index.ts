import { Card as TransactionCard } from "./Card"
import { Transfer as TransactionTransfer } from "./Transfer"
import { Type as TransactionType } from "./Type"

export type Transaction = TransactionCard | TransactionTransfer

export namespace Transaction {
	export type Card = TransactionCard
	export type Transfer = TransactionTransfer

	export type Type = TransactionType
	export namespace Type {
		export const is = TransactionType.is
	}
}
