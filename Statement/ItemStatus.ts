export type ItemStatus = "approved" | "created" | "declined" | "deposited" | "unknown" | "withdrawn"

export namespace ItemStatus {
	export function is(value: ItemStatus | any): value is ItemStatus {
		return (
			value == "approved" ||
			value == "created" ||
			value == "declined" ||
			value == "deposited" ||
			value == "unknown" ||
			value == "withdrawn"
		)
	}
}
