import * as isoly from "isoly"
import { Provider } from "../Provider"
import { Status as PurchaseStatus } from "./Card/Status"

export interface Base {
	id: string
	reference: { provider: Provider; id: string }
	currency: isoly.Currency
	meta: Record<string, any> //category?
}
