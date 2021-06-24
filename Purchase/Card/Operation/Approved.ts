import * as isoly from "isoly"
import { Base } from "./Base"

export interface Approved extends Base {
	issued: isoly.Date
}

export namespace Approved {}
