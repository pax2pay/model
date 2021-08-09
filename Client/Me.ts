import * as gracely from "gracely"
import { Credentials as modelCredentials } from "../Credentials"
import { Me as modelMe } from "../Me"
import { Connection } from "./Connection"

export class Me {
	constructor(private readonly connection: Connection) {}
	async login(user: string, password: string): Promise<modelMe>
	async login(credentials: modelCredentials): Promise<modelMe>
	async login(user: string | modelCredentials, password?: string): Promise<modelMe | gracely.Error> {
		const credentials = typeof user == "string" ? { user, password } : user
		const result = await this.connection.get<modelMe>("me", { authorization: modelCredentials.toBasic(credentials) })
		if (!gracely.Error.is(result))
			this.connection.key = result.key
		return result
	}
}
