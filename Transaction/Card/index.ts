import * as isoly from "isoly"
import { Provider } from "../../Provider"
import { Type as TransactionType } from "../Type"

export interface Card {
	id: number
	providerTransactionId: string
	organisationCode: string
	organisationName: string
	transactionType: TransactionType
	provider: Provider
	prvTimestamp: isoly.Date
	associatedAccount: number
	issuedAmount: number
	issuedCurrency: isoly.Currency
	receivedAmount: number
	receivedCurrency: string
	exchangeRate?: number
	description?: string
	createdOn: isoly.Date
	createdBy: string
	updatedOn: isoly.Date
	groupId?: number
	//bookingInfo?: BookingInfo
	friendlyName?: string
	expectedFundingTimestamp?: isoly.Date
}
