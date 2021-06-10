export type Funding = "debit" | "credit" | "prepaid"

export namespace Funding {
	export function is(value: Funding | any): value is Funding {
		return value == "debit" || value == "credit" || value == "prepaid"
	}
}
