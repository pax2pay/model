export interface Creatable {
	user: string
	name: { first: string; last: string }
	email: string
	category?: string
	roles?: string[]
}
export namespace Creatable {
	export function is(value: Creatable | any): value is Creatable {
		return (
			typeof value == "object" &&
			typeof value.user == "string" &&
			typeof value.name == "object" &&
			typeof value.name.first == "string" &&
			typeof value.name.last == "string" &&
			typeof value.email == "string"
		)
	}
}
