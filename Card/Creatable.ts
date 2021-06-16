import * as isoly from "isoly"
import { Provider } from "../Provider"
import { Type as CardType } from "./Type"
import { Usage as CardUsage } from "./Usage"

export interface Creatable {
	cardType: CardType
	//bookingInfo?: BookingInfo //TODO maybe not needed
	providerAccountId?: string
	provider: Provider
	balance: number
	currency: isoly.Currency
	fundingDate?: isoly.Date
	expiryDate?: isoly.Date
	usage?: CardUsage
}

export namespace Creatable {
	export function is(value: Creatable | any): value is Creatable {
		return (
			typeof value == "object" &&
			CardType.is(value.cardType) &&
			(value.providerAccountId == undefined || typeof value.providerAccountId == "string") &&
			Provider.is(value.provider) &&
			typeof value.balance == "number" &&
			isoly.Currency.is(value.currency) &&
			(value.fundingDate == undefined || isoly.Date.is(value.fundingDate)) &&
			(value.expiryDate == undefined || isoly.Date.is(value.expiryDate)) &&
			(value.usage == undefined || CardUsage.is(value.usage))
		)
	}
}
