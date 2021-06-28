export type EventType = "authorisation" | "card_creation" | "refund" | "settlement"

export namespace EventType {
	export function is(value: EventType | any): value is EventType {
		return value == "authorisation" || value == "card_creation" || value == "refund" || value == "settlement"
	}
}
