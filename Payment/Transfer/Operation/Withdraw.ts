import { Base } from "./Base"
import { Type as OperationType } from "./Type"

export interface Withdraw extends Base {
	amount: number
	type: OperationType
}
