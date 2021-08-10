import * as gracely from "gracely"
import "isomorphic-fetch"
import { config } from "dotenv"
import { Client } from "./index"
config()
describe("Client", () => {
	it("auto login", async () => {
		const client = Client.create(process.env.server)
		expect(client).not.toBeUndefined()
		if (client) {
			client.onUnauthorized = async () => {
				const me = await client.me.login(process.env.user ?? "", process.env.password ?? "")
				expect(me).toMatchObject({})
				return !gracely.Error.is(me)
			}
			const statement = await client.account.statement.get(process.env.account ?? "", "2010-01-01", "2011-01-01")
			expect(statement).toMatchObject({})
		}
	})
})
