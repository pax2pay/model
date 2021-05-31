import * as isoly from "isoly"
import { Provider } from "../Provider"

export interface Creatable {
	name: string
	currency: isoly.Currency
	reference: { provider: Provider; id: string }
}
export namespace Creatable {
	export function is(value: Creatable | any): value is Creatable {
		return (
			(typeof value == "object" && typeof value.reference == "string") ||
			Provider.is(value.provider) ||
			typeof value.name == "string" ||
			isoly.Currency.is(value.currency)
		)
	}
}
