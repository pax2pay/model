export type Status = "approved" | "created" | "declined" | "deposited" | "unknown" | "withdrawn"

export namespace Status {
	export function is(value: Status | any): value is Status {
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
