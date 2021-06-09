import * as isoly from "isoly"
import { Account } from "../../Account"
import { Creatable as TransferCreatable } from "./Creatable"
import { Status as TransferStatus } from "./Status"

export interface Transfer extends TransferCreatable {
	id: string
	sourceAccount: Account
	//TODO Beneficiary
	destinationAccount: Account
	scheduled: boolean
	status: TransferStatus
	createdDate: isoly.Date
	error?: string
}

export namespace Transfer {
	export function is(value: Transfer | any): value is Transfer {
		return (
			typeof value == "object" &&
			typeof value.id == "string" &&
			Account.is(value.sourceAccount) &&
			Account.is(value.destinationAccount) &&
			typeof value.scheduled == "boolean" &&
			TransferStatus.is(value.status) &&
			isoly.Date.is(value.createdDate) &&
			(value.error == undefined || typeof value.error == "string")
		)
	}

	export type Creatable = TransferCreatable
	export namespace Creatable {
		export const is = TransferCreatable.is
	}

	export type Status = TransferStatus
	export namespace Status {
		export const is = TransferStatus.is
	}
}
