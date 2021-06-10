export type Status = "active" | "deleted" | "outdated"

export namespace Status {
	export function is(value: Status | any): value is Status {
		return value == "active" || value == "deleted" || value == "outdated"
	}
}
