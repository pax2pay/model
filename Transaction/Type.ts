export type Type =
	| "create_card"
	| "fund_card"
	| "purchase"
	| "refund"
	| "sweep"
	| "close"
	| "freeze"
	| "thaw"
	| "approval_pending"
	| "expire"
	| "unknown"

export namespace Type {
	export function is(value: Type | any): value is Type {
		return (
			value == "create_card" ||
			value == "fund_card" ||
			value == "purchase" ||
			value == "refund" ||
			value == "sweep" ||
			value == "close" ||
			value == "freeze" ||
			value == "thaw" ||
			value == "approval_pending" ||
			value == "expire" ||
			value == "unknown"
		)
	}
}
