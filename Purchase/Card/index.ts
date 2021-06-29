import { Organization } from "../../Organization"
import { Base } from "../Base"
import { Type as PurchaseType } from "../Type"
import { Operation as CardOperation } from "./Operation"
import { Status as PurchaseCardStatus } from "./Status"

export interface Card extends Base {
	//id: string
	type: PurchaseType
	//reference: { provider: Provider; id: string }
	organization: Organization
	//amount: number
	meta: Record<string, any> //Create more specific type
	operations: CardOperation[]
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

		export const balanceImpact = CardOperation.balanceImpact
	}

	export type Status = PurchaseCardStatus
	export namespace Status {
		export const is = PurchaseCardStatus.is
	}
}
