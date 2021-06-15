export type Status =
	| "active"
	| "inactive"
	| "closed"
	| "deleted"
	| "expired"
	| "pending"
	| "approved"
	| "declined"
	| "generated"

export namespace Status {
	export function is(value: Status | any): value is Status {
		return (
			value == "active" ||
			value == "inactive" ||
			value == "closed" ||
			value == "deleted" ||
			value == "expired" ||
			value == "pending" ||
			value == "approved" ||
			value == "declined" ||
			value == "generated"
		)
	}
}
