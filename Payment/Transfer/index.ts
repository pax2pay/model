import { isoly } from "isoly"
import { Creatable as TransferCreatable } from "./Creatable"
export interface Transfer extends Transfer.Creatable {
	id: string
	status: string
	operations: { type: string; time: isoly.DateTime }[]
}
export namespace Transfer {
	export type Creatable = TransferCreatable
}
