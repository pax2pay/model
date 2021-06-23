import * as isoly from "isoly"
import { Creatable as BeneficiaryCreatable } from "./Creatable"
import { Destination as BeneficiaryDestination } from "./Destination"
import { Status as BeneficiaryStatus } from "./Status"

export interface Beneficiary extends BeneficiaryCreatable {
	id: number
	createdOn: isoly.Date
	history: Beneficiary[]
}

export namespace Beneficiary {
	export function is(value: Beneficiary | any): value is Beneficiary {
		return (
			typeof value == "object" &&
			typeof value.id == "number" &&
			isoly.Date.is(value.createdOn) &&
			Array.isArray(value.history) &&
			value.limits.every((h: any) => Beneficiary.is(h))
		)
	}

	export type Creatable = BeneficiaryCreatable
	export namespace Creatable {
		export const is = BeneficiaryCreatable.is
	}
	export type Destination = BeneficiaryDestination
	export namespace Destination {
		export const is = BeneficiaryDestination.is
	}
	export type Status = BeneficiaryStatus
	export namespace Status {
		export const is = BeneficiaryStatus.is
	}
}
