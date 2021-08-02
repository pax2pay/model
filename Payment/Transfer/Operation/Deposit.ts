import { Base } from "./Base"
import { Type as OperationType } from "./Type"

export interface Deposit extends Base {
	amount: number
	type: OperationType
}
