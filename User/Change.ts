import { Creatable } from "./Creatable"
import { Limit } from "./Limit"

export interface Change extends Partial<Creatable> {
	user: string
	name: { first: string; last: string }
	email: string
	limits?: Limit[]
	"2fa"?: {
		enabled?: boolean
		provider?: string
	}
}
export namespace Change {
	export function is(value: Change | any): value is Change {
		return (
			typeof value == "object" &&
			typeof value.user == "string" &&
			typeof value.name.first == "string" &&
			typeof value.name.last == "string" &&
			typeof value.email == "string" &&
			(value.category == undefined || typeof value.category == "string") &&
			(value.roles == undefined ||
				(Array.isArray(value.roles) && value.roles.every((r: any) => typeof r == "string"))) &&
			(value.limits == undefined || (Array.isArray(value.limits) && value.limits.every(Limit.is))) &&
			(value["2fa"] == undefined ||
				(typeof value["2fa"] == "object" &&
					(value["2fa"].enabled == undefined || typeof value["2fa"].enabled == "boolean") &&
					(value["2fa"].provider == undefined || typeof value["2fa"].provider == "string")))
		)
	}
}
