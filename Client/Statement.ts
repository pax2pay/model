import * as gracely from "gracely"
import * as isoly from "isoly"
import { Account as modelAccount } from "../Account"
import { Statement as modelStatement } from "../Statement"
import { Connection } from "./Connection"

export class Statement {
	constructor(private readonly connection: Connection) {}
	async get(
		account: modelAccount | string,
		start: isoly.Date,
		end: isoly.Date
	): Promise<modelStatement | gracely.Error> {
		return await this.connection.get<modelStatement>(
			`account/${typeof account == "string" ? account : account.id}/statement?start=${start}&end=${end}`
		)
	}
}
