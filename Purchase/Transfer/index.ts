import { Base } from "../Base"
import { Type } from "../Type"
import { Operation as TransferOperation } from "./Operation"
import { Type as TransferType } from "./Type"

export interface Transfer extends Base {
	type: Type
	meta: Record<string, any>
	operations: TransferOperation[]
	transferType: TransferType
}

export namespace Transfer {
	export type Type = TransferType
	export type Operation = TransferOperation
	export namespace Operation {
		export type Base = TransferOperation.Base
		export type Create = TransferOperation.Create
		export type Settle = TransferOperation.Settle
		export type Approved = TransferOperation.Approved
		export type Type = TransferOperation.Type
		export type Status = TransferOperation.Status
	}
}
