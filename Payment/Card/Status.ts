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
			(value.authorized == undefined || typeof value.authorized == "number") &&
			(value.captured == undefined || typeof value.captured == "number") &&
			(value.settled == undefined || typeof value.settled == "number") &&
			(value.refunded == undefined || typeof value.refunded == "number")
		)
	}
}
