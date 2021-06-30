import * as isoly from "isoly"
import { Provider } from "../../../Provider"
import { Status as OperationStatus } from "./Status"
import { Type as OperationType } from "./Type"

export interface Base {
	time: isoly.Date
	status: OperationStatus
	type: OperationType
	reference: { provider: Provider; id: string }
}
