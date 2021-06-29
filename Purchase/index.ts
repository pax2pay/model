import { Card as PurchaseCard } from "./Card"
import { Transfer as PurchaseTransfer } from "./Transfer"
import { Type as PurchaseType } from "./Type"

export type Purchase = PurchaseCard | PurchaseTransfer

export namespace Purchase {
	export type Card = PurchaseCard
	export namespace Card {
		export type Operation = PurchaseCard.Operation
		export namespace Operation {
			export type Authorize = PurchaseCard.Operation.Authorize
			export type Capture = PurchaseCard.Operation.Capture
			export type Create = PurchaseCard.Operation.Create
			export type Expire = PurchaseCard.Operation.Expire
			export type Freeze = PurchaseCard.Operation.Freeze
			export type Limit = PurchaseCard.Operation.Limit
			export type Refund = PurchaseCard.Operation.Refund
			export type Release = PurchaseCard.Operation.Release
			export type Thaw = PurchaseCard.Operation.Thaw
			export type Approved = PurchaseCard.Operation.Approved
			export type Base = PurchaseCard.Operation.Base
			export type Status = PurchaseCard.Operation.Status
			export type Type = PurchaseCard.Operation.Type
			export type Settle = PurchaseCard.Operation.Settle

			export const balanceImpact = PurchaseCard.Operation.balanceImpact
		}
		export type Status = PurchaseCard.Status
		export namespace Status {
			export const is = PurchaseCard.Status.is
		}

		export const getStatus = PurchaseCard.getStatus
		export const getAmount = PurchaseCard.getAmount
	}

	export type Transfer = PurchaseTransfer

	export type Type = PurchaseType
	export namespace Type {
		export const is = PurchaseType.is
	}
}
