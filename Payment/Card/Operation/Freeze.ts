import * as isoly from "isoly"
import { Base } from "./Base"

export interface Freeze extends Base {
	start?: isoly.Date
	description?: string
}
