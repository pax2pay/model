import { Base } from "./Base"

export interface Withdraw extends Base {
	amount: number
	from: string //redundant?
}
