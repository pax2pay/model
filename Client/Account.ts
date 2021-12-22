import * as gracely from "gracely"
import * as http from "cloudly-http"
import * as rest from "cloudly-rest"
import { Account as modelAccount } from "../Account"
import { Transaction } from "./Transaction"

export class Account extends rest.Collection<gracely.Error> {
	transaction = new Transaction(this.client)
	async list(): Promise<modelAccount[] | gracely.Error> {
		return await this.client.get<modelAccount[]>("account")
	}
}
