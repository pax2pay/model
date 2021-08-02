import { Card as PaymentCard } from "./Card"
import { Transfer as PaymentTransfer } from "./Transfer"
import { Type as PaymentType } from "./Type"

export type Payment = PaymentCard | PaymentTransfer

export namespace Payment {
	export type Card = PaymentCard
	export namespace Card {
		export type Operation = PaymentCard.Operation
		export namespace Operation {
			export type Authorize = PaymentCard.Operation.Authorize
			export type Capture = PaymentCard.Operation.Capture
			export type Create = PaymentCard.Operation.Create
			export type Expire = PaymentCard.Operation.Expire
			export type Freeze = PaymentCard.Operation.Freeze
			export type Limit = PaymentCard.Operation.Limit
			export type Refund = PaymentCard.Operation.Refund
			export type Release = PaymentCard.Operation.Release
			export type Thaw = PaymentCard.Operation.Thaw
			export type Approved = PaymentCard.Operation.Approved
			export type Base = PaymentCard.Operation.Base
			export type Status = PaymentCard.Operation.Status
			export type Type = PaymentCard.Operation.Type
			export type Settle = PaymentCard.Operation.Settle

			export const balanceImpact = PaymentCard.Operation.balanceImpact
		}
		export type Status = PaymentCard.Status
		export namespace Status {
			export const is = PaymentCard.Status.is
		}

		export const getStatus = PaymentCard.getStatus
		export const getAmount = PaymentCard.getAmount
	}

	export type Transfer = PaymentTransfer

	export namespace Transfer {
		export type Operation = PaymentTransfer.Operation
		export namespace Operation {
			export type Base = PaymentTransfer.Operation.Base
			export type Deposit = PaymentTransfer.Operation.Deposit
			export type Withdraw = PaymentTransfer.Operation.Withdraw
			export type Type = PaymentTransfer.Operation.Type
			export type Status = PaymentTransfer.Operation.Status
		}
	}

	export type Type = PaymentType
	export namespace Type {
		export const is = PaymentType.is
	}
}
