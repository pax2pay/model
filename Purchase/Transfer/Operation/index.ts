import * as isoly from "isoly"
import { Approved as OperationApproved } from "./Approved"
import { Create as OperationCreate } from "./Create"
import { Settle as OperationSettle } from "./Settle"
import { Status as OperationStatus } from "./Status"
import { Type as OperationType } from "./Type"

export interface Operation {
	time: isoly.Date
	destination?: string
	type: OperationType
	status: OperationStatus
}

export namespace Operation {
	export type Create = OperationCreate
	export type Settle = OperationSettle
	export type Approved = OperationApproved
	export type Type = OperationType
	export type Status = OperationStatus
}
