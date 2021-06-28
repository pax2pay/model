import * as isoly from "isoly"
import { EventStatus } from "./EventStatus"
import { EventType } from "./EventType"

export interface Event {
	transactionDate: isoly.Date
	organisation: string
	cardId?: string
	transactionType: EventType
	status: EventStatus
	sourceAccount: string
	sourceAccountIban?: string
	cardNumber?: string
	cardType?: string
	usedAs?: string
	billingCurrency: isoly.Currency
	billingAmount: number
	transactionCurrency: isoly.Currency
	transactionAmount: number
	exchangeRate: number
	trackingId?: string
	departureDate?: isoly.Date
	supplierCode?: string
	supplierBookingRef?: string
	leadPassengerName?: string
	agentBookingRef?: string
	createdBy?: string
	transactionId?: string
	orderId?: string
	merchantCategoryCode?: string
	merchantName?: string
	merchantCountry?: string
	sourceAccountSortCode?: string
	sourceAccountAccountNumber?: string
	reason?: string
}

export namespace Event {
	export function is(value: Event | any): value is Event {
		return (
			typeof value == "object" &&
			isoly.Date.is(value.transactionDate) &&
			typeof value.organisation == "string" &&
			(value.cardId == undefined || typeof value.cardId == "string") &&
			EventType.is(value.transactionType) &&
			EventStatus.is(value.status) &&
			typeof value.sourceAccount == "string" &&
			(value.sourceAccountIban == undefined || typeof value.sourceAccountIban == "string") &&
			(value.cardNumber == undefined || typeof value.cardNumber == "string") &&
			(value.cardType == undefined || typeof value.cardType == "string") &&
			(value.usedAs == undefined || typeof value.usedAs == "string") &&
			isoly.Currency.is(value.billingCurrency) &&
			typeof value.billingAmount == "number" &&
			isoly.Currency.is(value.transactionCurrency) &&
			typeof value.transactionAmount == "number" &&
			typeof value.exchangeRate == "number" &&
			(value.trackingId == undefined || typeof value.trackingId == "string") &&
			(value.departureDate == undefined || isoly.Date.is(value.departureDate)) &&
			(value.supplierCode == undefined || typeof value.supplierCode == "string") &&
			(value.supplierBookingRef == undefined || typeof value.supplierBookingRef == "string") &&
			(value.leadPassengerName == undefined || typeof value.leadPassengerName == "string") &&
			(value.agentBookingRef == undefined || typeof value.agentBookingRef == "string") &&
			(value.createdBy == undefined || typeof value.createdBy == "string") &&
			(value.transactionId == undefined || typeof value.transactionId == "string") &&
			(value.orderId == undefined || typeof value.orderId == "string") &&
			(value.merchantCategoryCode == undefined || typeof value.merchantCategoryCode == "string") &&
			(value.merchantName == undefined || typeof value.merchantName == "string") &&
			(value.merchantCountry == undefined || typeof value.merchantCountry == "string") &&
			(value.sourceAccountSortCode == undefined || typeof value.sourceAccountSortCode == "string") &&
			(value.sourceAccountAccountNumber == undefined || typeof value.sourceAccountAccountNumber == "string") &&
			(value.reason == undefined || typeof value.reason == "string")
		)
	}
}
