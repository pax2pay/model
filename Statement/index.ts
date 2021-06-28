import * as isoly from "isoly"
import { Event as StatementEvent } from "./Event"
import { EventStatus as StatementEventStatus } from "./EventStatus"
import { EventType as StatementEventType } from "./EventType"
import { Item as StatementItem } from "./Item"
import { ItemStatus as StatementItemStatus } from "./ItemStatus"
import { ItemType as StatementItemType } from "./ItemType"

export interface Statement {
	account: string
	start: isoly.Date
	end: isoly.Date
	openingBalance: number
	closingBalance: number
	items: (StatementItem | StatementEvent)[][]
}

export namespace Statement {
	export function is(value: Statement | any): value is Statement {
		return (
			typeof value == "object" &&
			typeof value.account == "string" &&
			isoly.Date.is(value.from) &&
			isoly.Date.is(value.end) &&
			typeof value.openingBalance == "number" &&
			typeof value.closingBalance == "number" &&
			Array.isArray(value.items) &&
			value.items.every((i: StatementItem | StatementEvent | any) => StatementItem.is(i) || StatementEvent.is(i))
		)
	}

	export type Event = StatementEvent
	export namespace Event {
		export const is = StatementEvent.is
	}
	export type Item = StatementItem
	export namespace Item {
		export const is = StatementItem.is
	}
	export type ItemStatus = StatementItemStatus
	export namespace ItemStatus {
		export const is = StatementItemStatus.is
	}
	export type ItemType = StatementItemType
	export namespace ItemType {
		export const is = StatementItemType.is
	}
	export type EventType = StatementEventType
	export namespace EventType {
		export const is = StatementEventType.is
	}
	export type EventStatus = StatementEventStatus
	export namespace EventStatus {
		export const is = StatementEventStatus.is
	}
}
