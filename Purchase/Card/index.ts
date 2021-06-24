import * as isoly from "isoly"
import { Organization } from "../../Organization"
import { Provider } from "../../Provider"
import { Base } from "../Base"
import { Operation as CardOperation } from "./Operation"

export interface Card extends Base {
	id: string
	type: "card"
	reference: { provider: Provider; id: string }
	organization: Organization
	amount: number
	currency: isoly.Currency
	meta: Record<string, any> //Create more specific type
}

export namespace Card {
	export type Operation = CardOperation
}
