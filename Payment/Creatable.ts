import * as isoly from "isoly"
import { Type } from "./Type"

export interface Creatable {
	type?: Type
	amount: number
	currency?: isoly.Currency // probably only once we support automatically doing FX
	meta?: Record<string, any> // for example: airline, passenger name etc
}
