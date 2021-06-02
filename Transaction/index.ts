import { Card as TransactionCard } from "./Card"
import { Transfer as TransactionTransfer } from "./Transfer"

export type Transaction = TransactionCard | TransactionTransfer

export namespace Transaction {
	export type Card = TransactionCard
	export type Transfer = TransactionTransfer
}
