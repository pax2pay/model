export type Flag = "corporate" | "business" | "consumer"

export namespace Flag {
	export function is(value: Flag | any): value is Flag {
		return value == "corporate" || value == "business" || value == "consumer"
	}
}
