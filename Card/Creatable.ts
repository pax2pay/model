import { Type as CardType } from "./Type"
import * as isoly from "isoly"
import { Usage as CardUsage } from "./Usage"
import { Provider } from "../Provider"

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