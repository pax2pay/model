import * as gracely from "gracely"
import { Account as modelAccount } from "../Account"
import { Connection } from "./Connection"
import { Transaction } from "./Transaction"

export class Account {
	transaction = new Transaction(this.connection)
	constructor(private readonly connection: Connection) {}
	async list(): Promise<modelAccount[] | gracely.Error> {
		return await this.connection.get<modelAccount[]>("account")
	}
}
