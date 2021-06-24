export type Status = "authorized" | "settled" | "unapproved" //to be continued

export namespace Status {
	export function is(value: Status | any): value is Status {
		return value == "authorization" || value == "settlement"
	}
}
