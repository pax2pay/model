export type Status = "active" | "inactive" | "deleted" | "expired"

export namespace Status {
	export function is(value: Status | any): value is Status {
		return value == "active" || value == "inactive" || value == "deleted" || value == "expired"
	}
}
