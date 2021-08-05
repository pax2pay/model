export type Type = "authorization" | "reversal" | "settlement"

export namespace Type {
	export function is(value: Type | any): value is Type {
		return value == "authorization" || value == "reversal" || value == "settlement"
	}
}
