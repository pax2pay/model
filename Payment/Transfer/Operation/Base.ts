import * as isoly from "isoly"
import { Status as OperationStatus } from "./Status"

export interface Base {
	time: isoly.Date
	destination?: string
	status: OperationStatus
}
