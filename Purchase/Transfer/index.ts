import { Base } from "../Base"
import { Type } from "../Type"
import { Operation as TransferOperation } from "./Operation"

export interface Transfer extends Base {
	type: Type
	meta: Record<string, any>
	operations: TransferOperation[]
}

export namespace Transfer {
	export type Operation = TransferOperation
	export namespace Operation {
		export type Base = TransferOperation.Base
		export type Deposit = TransferOperation.Deposit
		export type Withdraw = TransferOperation.Withdraw
		export type Type = TransferOperation.Type
		export type Status = TransferOperation.Status
	}
}
