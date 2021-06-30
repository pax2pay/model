import { Base } from "./Base"

export interface Deposit extends Base {
	amount: number
	to: string //redundant?
}
