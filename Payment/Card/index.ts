import { isoly } from "isoly"
import { Creatable as CardCreatable } from "./Creatable"

export interface Card extends Card.Creatable {
	status: string
	operations: { type: string; time: isoly.DateTime }[]
}
export namespace Card {
	export type Creatable = CardCreatable
}
