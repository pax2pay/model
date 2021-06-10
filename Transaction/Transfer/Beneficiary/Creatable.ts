import { Destination as TransferDestination } from "./Destination"
import { Status as BeneficiaryStatus } from "./Status"

export interface Creatable {
	transferDestination: TransferDestination
	defaultReference?: string
	status: BeneficiaryStatus
	name?: string
	fullName: string
}

export namespace Creatable {
	export function is(value: Creatable | any): value is Creatable {
		return (
			typeof value == "object" &&
			TransferDestination.is(value.transferDestination) &&
			(value.defaultReference == undefined || typeof value.defaultReference == "string") &&
			BeneficiaryStatus.is(value.status) &&
			(value.name == undefined || typeof value.name == "string") &&
			typeof value.fullName == "string"
		)
	}
}
