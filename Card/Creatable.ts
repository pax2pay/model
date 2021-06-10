import * as isoly from "isoly"
import { Provider } from "../Provider"
import { Type as CardType } from "./Type"
import { Usage as CardUsage } from "./Usage"

export interface Creatable {
	cardType: CardType
	bookingInfo?: BookingInfo //TODO
	providerAccountId?: string
	providerCode: Provider
	balance: number
	currency: isoly.Currency
	fundingDate?: isoly.Date
	expiryDate?: isoly.Date
	usage?: CardUsage
}