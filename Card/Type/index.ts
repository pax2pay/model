import * as isoly from "isoly"
import { Provider } from "../../Provider"
import { Flag as TypeFlag } from "./Flag"
import { Funding as TypeFunding } from "./Funding"
import { Scheme as TypeScheme } from "./Scheme"

export interface Type {
	provider: Provider
	cardTypeId: string
	description: string
	scheme: TypeScheme
	funding: TypeFunding
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
			TypeScheme.is(value.scheme) &&
			TypeFunding.is(value.funding) &&
			Array.isArray(value.currencies) &&
			value.currencies.every((c: isoly.Currency | any) => isoly.Currency.is(c)) &&
			Array.isArray(value.flags) &&
			value.flags.every((f: TypeFlag | any) => TypeFlag.is(f)) &&
			Array.isArray(value.bins) &&
			value.bins.every((b: string | any) => typeof b == "string") &&
			typeof value.preActive == "boolean"
		)
	}
	export type Flag = TypeFlag
	export namespace Flag {
		export const is = TypeFlag.is
	}
	export type Funding = TypeFunding
	export namespace Funding {
		export const is = TypeFunding.is
	}
	export type Scheme = TypeScheme
	export namespace Scheme {
		export const is = TypeScheme.is
	}
}
