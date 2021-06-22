import * as isoly from "isoly"
import { Provider } from "../Provider"

export interface Base {
	id: string
	reference: { provider: Provider; id: string }
	amount: number
	currency: isoly.Currency
	meta: Record<string, any>
}
