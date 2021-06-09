import * as isoly from "isoly"
import { Provider } from "../../Provider"
import { Destination } from "./Destination"

export interface Creatable {
	provider: Provider
	providerSourceAccountId: string
	beneficiaryId?: string
	destination?: Destination
	destinationProviderAccountId?: string
	amount: number
	currency?: isoly.Currency
	reference?: string
	paymentDate?: isoly.Date
}

export namespace Creatable {
	export function is(value: Creatable | any): value is Creatable {
		return (
			typeof value == "object" &&
			typeof Provider.is(value.provider) &&
			typeof value.providerSourceAccountId == "string" &&
			(value.beneficiaryId == undefined || typeof value.beneficiaryId == "string") &&
			(value.destination == undefined || Destination.is(value.destination)) &&
			(value.destinationProviderAccountId == undefined || typeof value.destinationProviderAccountId == "string") &&
			typeof value.amount == "number" &&
			(value.currency == undefined || isoly.Currency.is(value.currency)) &&
			(value.currency == undefined || typeof value.currency == "string") &&
			(value.paymentDate == undefined || isoly.Date.is(value.paymentDate))
		)
	}
}
