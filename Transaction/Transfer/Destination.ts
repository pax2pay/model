import { Address } from "../../Address"

export interface Destination {
	accountNumber: string
	sortCode: string
	iban: string
	bic: string
	address: Address
	fullName: string
	saveAsNewBeneficiary: boolean
}

export namespace Destination {
	export function is(value: Destination | any): value is Destination {
		return (
			typeof value == "object" &&
			typeof value.accountNumber == "string" &&
			typeof value.sortCode == "string" &&
			typeof value.iban == "string" &&
			typeof value.bic == "string" &&
			Address.is(value.address) &&
			typeof value.fullName == "string" &&
			typeof value.saveAsNewBeneficiary == "boolean"
		)
	}
}
