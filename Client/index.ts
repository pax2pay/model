import * as gracely from "gracely"
import * as http from "cloudly-http"
import * as rest from "cloudly-rest"
import { Account } from "./Account"
import { Me } from "./Me"
import { User } from "./User"

export class Client extends rest.Client<gracely.Error> {
	readonly me = new Me(this.client)
	readonly account = new Account(this.client)
	readonly user = new User(this.client)
	static create<T = Record<string, any>>(
		url?: string,
		key?: string,
		load?: (connection: http.Client) => T
	): Client & T {
		const client = new http.Client<gracely.Error>(url, key)
		const result = new Client(client)
		if (load)
			Object.assign(result, load(client))
		return result as Client & T
	}
}
