export interface Organization {
	code: string
	name: string
	status: "active" | "deleted"
}
export namespace Organization {
	export function is(value: Organization | any): value is Organization {
		return (
			typeof value == "object" &&
			typeof value.code == "string" &&
			typeof value.name == "string" &&
			(value.status == "active" || value.status == "deleted")
		)
	}
}
