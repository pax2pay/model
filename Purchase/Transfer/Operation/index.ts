import { Approved as OperationApproved } from "./Approved"
import { Base as OperationBase } from "./Base"
import { Create as OperationCreate } from "./Create"
import { Settle as OperationSettle } from "./Settle"
import { Status as OperationStatus } from "./Status"
import { Type as OperationType } from "./Type"

export type Operation = OperationBase

export namespace Operation {
	export type Base = OperationBase
	export type Create = OperationCreate
	export type Settle = OperationSettle
	export type Approved = OperationApproved
	export type Type = OperationType
	export type Status = OperationStatus
}
