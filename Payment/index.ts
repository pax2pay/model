import { Creatable as PaymentCreatable } from "./Creatable"
import { Merchant as PaymentMerchant } from "./Merchant"
import { Meta as PaymentMeta } from "./Meta"

export namespace Payment {
	export type Creatable = PaymentCreatable
	export type Merchant = PaymentMerchant
	export type Meta = PaymentMeta
}
