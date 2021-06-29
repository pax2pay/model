import { Base } from "../Base"
import { Type } from "../Type"
import { Operation as TransferOperation } from "./Operation"

export interface Transfer extends Base {
	id: string
	type: Type
	meta: Record<string, any>
	operations: TransferOperation[]
}
