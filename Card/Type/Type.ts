import * as isoly from "isoly"
import { Provider } from "../../Provider"
import { Flag as TypeFlag } from "./Flag"
import { Funding } from "./Funding"
import { Scheme } from "./Scheme"

export interface Type {
	provider: Provider
	cardTypeId: string
	description: string
	scheme: Scheme
	funding: Funding
	currencies: isoly.Currency[]
	flags: TypeFlag[]
	bins: string[]
	preActive: boolean
}

export namespace Type {
	export function is(value: Type | any): value is Type {
		return (
			typeof value == "object" &&
			Provider.is(value.provider) &&
			typeof value.cardTypeId == "string" &&
			typeof value.description == "string" &&
			Scheme.is(value.scheme) &&
			Funding.is(value.funding) &&
			Array.isArray(value.currencies) &&
			value.currencies.every(c => isoly.Currency.is(c)) &&
			Array.isArray(value.flags) &&
			value.flags.every(f => TypeFlag.is(f)) &&
			Array.isArray(value.bins) &&
			value.bins.every(b => typeof b == "string") &&
			typeof value.preActive == "boolean"
		)
	}
}
