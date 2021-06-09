import * as isoly from "isoly"
import { Organization } from "../Organization"
import { Creatable as UserCreatable } from "./Creatable"
import { Limit as UserLimit } from "./Limit"
import { Status as UserStatus } from "./Status"

export interface User extends UserCreatable {
	status: UserStatus
	password: { changed: isoly.Date }
	organization: Organization
	limits: UserLimit[]
	"2fa"?: {
		enabled?: boolean
		provider?: string
	}
}
export namespace User {
	export function is(value: User | any): value is User {
		return (
			typeof value == "object" &&
			UserStatus.is(value.status) &&
			typeof value.password == "object" &&
			isoly.Date.is(value.password.changed) &&
			Organization.is(value.organization) &&
			Array.isArray(value.limits) &&
			value.limits.every((l: any) => Limit.is(l)) &&
			(value["2fa"] == undefined ||
				(typeof value["2fa"] == "object" &&
					(value["2fa"].enabled == undefined || typeof value["2fa"].enabled == "boolean") &&
					(value["2fa"].provider == undefined || typeof value["2fa"].provider == "string")))
		)
	}
	export type Creatable = UserCreatable
	export namespace Creatable {
		export const is = UserCreatable.is
	}
	export type Limit = UserLimit
	export namespace Limit {
		export const is = UserLimit.is
	}
	export type Status = UserStatus
	export namespace Status {
		export const is = UserStatus.is
	}
}
