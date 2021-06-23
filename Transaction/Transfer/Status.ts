export type Status =
	| "pending"
	| "pending_for_date"
	| "pending_for_funds"
	| "settled"
	| "cancelled"
	| "error_rejected"
	| "approval_pending"
	| "declined"
	| "approved"
	| "generated"

export namespace Status {
	export function is(value: Status | any): value is Status {
		return (
			value == "pending" ||
			value == "pending_for_date" ||
			value == "pending_for_funds" ||
			value == "settled" ||
			value == "cancelled" ||
			value == "error_rejected" ||
			value == "approval_pending" ||
			value == "declined" ||
			value == "approved" ||
			value == "generated"
		)
	}
}
