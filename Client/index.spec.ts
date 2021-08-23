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
				expect(me).toMatchObject({
					user: process.env.user,
					name: {
						first: expect.stringMatching(/.*/),
						last: expect.stringMatching(/.*/),
					},
					email: expect.stringMatching(
						/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i
					),
					key: expect.stringMatching(/^[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*$/),
					organization: {
						code: "mcom",
						name: "mcom org",
						status: "active",
					},
					status: "active",
					password: {
						changed: /^(\d{4}-[01]\d-[0-3]\d)|(\d{4}-[01]\d-[0-3]\d)|(\d{4}-[01]\d-[0-3]\d)$/,
					},
					limits: [],
					"2fa": {
						enabled: false,
					},
				})
				return !gracely.Error.is(me)
			}
			const transactions = await client.account.transaction.list(process.env.account ?? "", "2010-01-01", "2011-01-01")
			expect(transactions).toMatchObject([])
		}
	})
	it("no server", async () => {
		const client = Client.create()
		expect(client).not.toBeUndefined()
		if (client) {
			const error = await client.account.transaction.list(process.env.account ?? "", "2020-01-01", "2021-01-01")
			expect(error).toEqual({
				type: "not found",
				error: "No server configured.",
				status: 404,
			})
		}
	})
})
