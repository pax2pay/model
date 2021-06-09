import { Organization } from "../Organization"
import { Creatable as AccountCreatable } from "./Creatable"
import { Status as AccountStatus } from "./Status"

export interface Account extends AccountCreatable {
	id: number
	organization: Organization
	status: AccountStatus
	balance: number
}
export namespace Account {
	export function is(value: Account | any): value is Account {
		return (
			typeof value == "object" &&
			typeof value.id == "string" &&
			Organization.is(value.organization) &&
			AccountStatus.is(value.status) &&
			typeof value.balance == "number" &&
			AccountCreatable.is(value)
		)
	}
	export type Creatable = AccountCreatable
	export namespace Creatable {
		export const is = AccountCreatable.is
	}
	export type Status = AccountStatus
	export namespace Status {
		export const is = AccountStatus.is
	}
}
