export type EventStatus = "succeeded" | "failed" | "declined" | "unknown"

export namespace EventStatus {
	export function is(value: EventStatus | any): value is EventStatus {
		return value == "succeeded" || value == "failed" || value == "declined" || value == "unknown"
	}
}
