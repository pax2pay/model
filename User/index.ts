import { Organization } from "../Organization"
import { Creatable as UserCreatable } from "./Creatable"
import { Limit as UserLimit } from "./Limit"
import { Status as UserStatus } from "./Status"

export interface User extends UserCreatable {
	status?: UserStatus
	passwordUpdatedOn?: string
	organization?: Organization
	limits?: UserLimit[]
	"2fa"?: {
		enabled?: boolean
		provider?: string
	}
}
export namespace User {
	export function is(value: User | any): value is User {
		return typeof value == "object"
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
