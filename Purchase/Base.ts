import * as isoly from "isoly"
import { Provider } from "../Provider"
import { Operation as CardOperation } from "./Card/Operation"
import { Status as PurchaseStatus } from "./Status"
import { Operation as TransferOperation } from "./Transfer/Operation"

export interface Base {
	id: string
	reference: { provider: Provider; id: string }
	amount: number
	currency: isoly.Currency
	meta: Record<string, any> //category?
	//status: PurchaseStatus
	operations: CardOperation[] | TransferOperation[]
	//destination?
}
