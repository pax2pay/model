import { Card as PurchaseCard } from "./Card"
import { Transfer as PurchaseTransfer } from "./Transfer"
import { Type as PurchaseType } from "./Type"

export type Purchase = PurchaseCard | PurchaseTransfer

export namespace Purchase {
	export type Card = PurchaseCard
	export type Transfer = PurchaseTransfer

	export type Type = PurchaseType
	export namespace Type {
		export const is = PurchaseType.is
	}
}
