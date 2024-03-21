import * as cde from "@pax2pay/model-cde"
import { Base } from "../Base"
import { Product } from "./Product"

export interface Creatable extends Base {
	type: "card"
	card: {
		product: Product
		expires: cde.Card.Expires
		delivery?:
			| { method: "email"; address: string | string[]; message: string }
			| { method: "acquirer" }
			| { method: "direct"; key?: string }
		usage: "single" | "multiple"
	}
}
