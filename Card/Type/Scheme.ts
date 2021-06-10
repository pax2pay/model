export type Scheme = "visa" | "mastercard" | "american_express"

export namespace Scheme {
	export function is(value: Scheme | any): value is Scheme {
		return value == "visa" || value == "mastercard" || value == "american_express"
	}
}
