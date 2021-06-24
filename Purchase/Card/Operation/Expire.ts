import * as isoly from "isoly"
import { Base } from "./Base"

export interface Expire extends Base {
	expiration?: isoly.Date
}
