import * as gracely from "gracely"
import * as rest from "cloudly-rest"
import { Credentials as modelCredentials } from "../Credentials"
import { Me as modelMe } from "../Me"

export class Me extends rest.Collection<gracely.Error> {
	async login(user: string, password: string): Promise<modelMe>
	async login(credentials: modelCredentials): Promise<modelMe>
	async login(user: string | modelCredentials, password?: string): Promise<modelMe | gracely.Error> {
		const credentials = typeof user == "string" ? { user, password } : user
		const result = await this.client.get<modelMe>("me", { authorization: modelCredentials.toBasic(credentials) })
		if (!gracely.Error.is(result))
			this.client.key = result.key
		return result
	}
}
