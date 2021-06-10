import * as isoly from "isoly"
import { Address } from "../../../Address"

export interface Destination {
	accountNumber: string
	sortCode: string
	iban: string
	bic: string
	currency: isoly.Currency
	address: Address
	fullName: string
}

export namespace Destination {
	export function is(value: Destination | any): value is Destination {
		return (
			typeof value == "object" &&
			typeof value.accountNumber == "string" &&
			typeof value.sortCode == "string" &&
			typeof value.iban == "string" &&
			typeof value.bic == "string" &&
			isoly.Currency.is(value.currency) &&
			Address.is(value.address) &&
			typeof value.fullName == "string"
		)
	}
}
