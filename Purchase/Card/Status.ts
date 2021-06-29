export interface Status {
	authorized?: number
	captured?: number
	settled?: number
	refunded?: number
}
export namespace Status {
	export function is(value: Status | any): value is Status {
		return (
			typeof value == "object" &&
			typeof value.authorized == "number" &&
			typeof value.captured == "number" &&
			typeof value.settled == "number" &&
			typeof value.refunded == "number"
		)
	}
}
