export type ItemType = "authorisation" | "reversal" | "settlement"

export namespace ItemType {
	export function is(value: ItemType | any): value is ItemType {
		return value == "authorisation" || value == "reversal" || value == "settlement"
	}
}
