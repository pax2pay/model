export type Status = "succeeded" | "failed" | "declined" | "unknown"

export namespace Status {
	export function is(value: Status | any): value is Status {
		return value == "succeeded" || value == "failed" || value == "declined" || value == "unknown"
	}
}
