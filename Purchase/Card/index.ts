import * as isoly from "isoly"
import { Organization } from "../../Organization"
import { Provider } from "../../Provider"
import { Base } from "../Base"
import { Operation as CardOperation } from "./Operation"

export interface Card extends Base {
	id: string
	type: string
	reference: { provider: Provider; id: string }
	organization: Organization
	amount: number
	currency: isoly.Currency
	meta: Record<string, any> //Create more specific type
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
}
