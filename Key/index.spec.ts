import * as dotenv from "dotenv"
import * as model from "../index"

dotenv.config()

describe("model.Key", () => {
	it("sign Key", async () => {
		const signingSecret = process.env.signingSecret
		expect(signingSecret).toBeTruthy()

		// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
		const issuer = model.Key.Issuer.create("test", signingSecret!)
		const token = await issuer.sign(
			{ backend: "abc.def.ghij", expires: "2021-07-01T00:00:00.000Z" },
			new Date(2020, 2, 2, 0, 0, 0)
		)
		expect(token).toEqual(
			"eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ0ZXN0IiwiaWF0IjoxNTgzMTAzNjAwLCJia2QiOiJhYmMuZGVmLmdoaWoiLCJleHAiOjE2MjUwOTc2MDB9.IRPWJVn1sgeMAuBAsIapRoSSO59BmaXPE8JQJqY3aTkTI6DEwc17Lterj9xRLSOqM66tMzCJh7yXcVPWGyzn03FnrzlPbAQxwSDZOJgn2_zD7fnY43KWtedRENRna8fq-Sre34lrp3bTNqsIdaFU20YVqm9zozhC9hlD1CtIYTQ0IUmIN7k2To1qyXQ8RnKzxQ8S3dehC1-hmW5xlWpz9Ne2rFr3wWUocUvPruoNMz5zsk5L_it0XeyxalOFvjkl7MGAzv0PHxh9pFhzDf1tqLXzG21rhOAo6VjUctTF5TdKzb-s0wAGS0gsS6uGz5APzlKndcwCXBvbiF-hDEMvWg"
		)
	})

	it("verify token", async () => {
		// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
		const verifier = model.Key.Verifier.create("test")
		const verification = await verifier.verify(
			"eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ0ZXN0IiwiaWF0IjoxNTgzMTAzNjAwLCJia2QiOiJhYmMuZGVmLmdoaWoiLCJleHAiOjE2MjUwOTc2MDB9.IRPWJVn1sgeMAuBAsIapRoSSO59BmaXPE8JQJqY3aTkTI6DEwc17Lterj9xRLSOqM66tMzCJh7yXcVPWGyzn03FnrzlPbAQxwSDZOJgn2_zD7fnY43KWtedRENRna8fq-Sre34lrp3bTNqsIdaFU20YVqm9zozhC9hlD1CtIYTQ0IUmIN7k2To1qyXQ8RnKzxQ8S3dehC1-hmW5xlWpz9Ne2rFr3wWUocUvPruoNMz5zsk5L_it0XeyxalOFvjkl7MGAzv0PHxh9pFhzDf1tqLXzG21rhOAo6VjUctTF5TdKzb-s0wAGS0gsS6uGz5APzlKndcwCXBvbiF-hDEMvWg"
		)
		expect(verification).toEqual({
			backend: "abc.def.ghij",
			expires: "2021-07-01T00:00:00.000Z",
			issued: "2020-03-01T23:00:00.000Z",
			issuer: "test",
			token:
				"eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ0ZXN0IiwiaWF0IjoxNTgzMTAzNjAwLCJia2QiOiJhYmMuZGVmLmdoaWoiLCJleHAiOjE2MjUwOTc2MDB9.IRPWJVn1sgeMAuBAsIapRoSSO59BmaXPE8JQJqY3aTkTI6DEwc17Lterj9xRLSOqM66tMzCJh7yXcVPWGyzn03FnrzlPbAQxwSDZOJgn2_zD7fnY43KWtedRENRna8fq-Sre34lrp3bTNqsIdaFU20YVqm9zozhC9hlD1CtIYTQ0IUmIN7k2To1qyXQ8RnKzxQ8S3dehC1-hmW5xlWpz9Ne2rFr3wWUocUvPruoNMz5zsk5L_it0XeyxalOFvjkl7MGAzv0PHxh9pFhzDf1tqLXzG21rhOAo6VjUctTF5TdKzb-s0wAGS0gsS6uGz5APzlKndcwCXBvbiF-hDEMvWg",
		})
	})
})
