import { Base } from "../Base"

export interface Creatable extends Base {
	type: "transfer"
	recipient: { type: "iban"; iban: string; bic?: string }
}
