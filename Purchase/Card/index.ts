import * as isoly from "isoly"
import { Provider } from "../../Provider"

export interface Card {
	id: string
	type: "card"
	reference: { provider: Provider; id: string }
	organization: Organization
	amount: number
	currency: isoly.Currency
	meta: Record<string, any>
}
