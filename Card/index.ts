import * as isoly from "isoly"
import { Account } from "../Account"
import { Creatable as CardCreatable } from "./Creatable"
import { Status as CardStatus } from "./Status"
import { System as CreationSystem } from "./System"
import { Usage as CardUsage } from "./Usage"

export interface Card extends CardCreatable {
	id: string //not sure if needed
	nameOnCard: string
	cardNumber: string
	cvv: string
	issueDate: isoly.Date
	fundingBalance: number
	remainingBalance: number
	status: CardStatus
	providerCardId: string
	cardAccount: Account
	fundingAccount: Account
	creationSystem: CreationSystem
	createdBy: string
	//bookingInfo (expectedUsage)
}

export namespace Card {
	export function is(value: Card | any): value is Card {
		return (
			typeof value == "object" &&
			typeof value.id == "string" &&
			typeof value.nameOnCard == "string" &&
			typeof value.cardNumber == "number" &&
			typeof value.cvv == "string" &&
			isoly.Date.is(value.issueDate) &&
			typeof value.fundingBalance == "number" &&
			typeof value.remainingBalance == "number" &&
			CardStatus.is(value.status) &&
			typeof value.providerCardId == "string" &&
			Account.is(value.cardAccount) &&
			Account.is(value.fundingAccount) &&
			CreationSystem.is(value.creationSystem) &&
			typeof value.createdBy == "string"
		)
	}
	export type Creatable = CardCreatable
	export namespace Creatable {
		export const is = CardCreatable.is
	}
	export type Status = CardStatus
	export namespace Status {
		export const is = CardStatus.is
	}
	export type System = CreationSystem
	export namespace System {
		export const is = CreationSystem.is
	}
	export type Usage = CardUsage
	export namespace Usage {
		export const is = CardUsage.is
	}
}
