import { Base } from "./Base"

//Void authorization
export interface Release extends Base {
	amount: number
	description?: string
}
