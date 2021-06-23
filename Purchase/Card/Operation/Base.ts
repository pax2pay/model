import * as isoly from "isoly"
import { Status as OperationStatus } from "./Status"
import { Type as OperationType } from "./Type"

export interface Base {
	time: isoly.Date
	affectsBalance: boolean
	status: OperationStatus
	type: OperationType
	amount: number
}
