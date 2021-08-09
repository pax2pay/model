import * as gracely from "gracely"
import { Account as modelAccount } from "../Account"
import { Connection } from "./Connection"
import { Statement } from "./Statement"

export class Account {
	statement = new Statement(this.connection)
	constructor(private readonly connection: Connection) {}
	async list(): Promise<modelAccount[] | gracely.Error> {
		return await this.connection.get<modelAccount[]>("account")
	}
}
