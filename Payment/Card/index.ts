import { Organization } from "../../Organization"
import { Base } from "../Base"
import { Type as PaymentType } from "../Type"
import { getAmount as getAmountFunction } from "./getAmount"
import { getStatus as getStatusFunction } from "./getStatus"
import { Operation as CardOperation } from "./Operation"
import { Status as CardStatus } from "./Status"

export interface Card extends Base {
	type: PaymentType
	organization: Organization
	operations: CardOperation[]
	status: CardStatus
}

export namespace Card {
	export type Operation = CardOperation
	export namespace Operation {
		export type Authorize = CardOperation.Authorize
		export type Capture = CardOperation.Capture
		export type Create = CardOperation.Create
		export type Expire = CardOperation.Expire
		export type Freeze = CardOperation.Freeze
		export type Limit = CardOperation.Limit
		export type Refund = CardOperation.Refund
		export type Release = CardOperation.Release
		export type Thaw = CardOperation.Thaw
		export type Approved = CardOperation.Approved
		export type Base = CardOperation.Base
		export type Status = CardOperation.Status
		export type Type = CardOperation.Type
		export type Settle = CardOperation.Settle

		export const balanceImpact = CardOperation.balanceImpact
	}

	export type Status = CardStatus
	export namespace Status {
		export const is = CardStatus.is
	}

	export const getStatus = getStatusFunction
	export const getAmount = getAmountFunction
}
