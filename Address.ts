import * as isoly from "isoly"

export interface Address {
	addressLine1: string
	addressLine2: string
	country: isoly.CountryCode.Alpha2
	zipCode: string
	city: string
}

export namespace Address {
	export function is(value: Address | any): value is Address {
		return (
			typeof value == "object" &&
			typeof value.addressLine1 == "string" &&
			typeof value.addressLine2 == "string" &&
			isoly.CountryCode.Alpha2.is(value.country) &&
			typeof value.zipCode == "string" &&
			typeof value.city == "string"
		)
	}
}
