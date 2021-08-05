export type Type = "authorization" | "card creation" | "refund" | "settlement"

export namespace Type {
	export function is(value: Type | any): value is Type {
		return value == "authorization" || value == "card creation" || value == "refund" || value == "settlement"
	}
}
