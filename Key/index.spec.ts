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
			{ backend: "abc.def.ghij", expires: "2022-07-01T00:00:00.000Z" },
			new Date("2020-03-01T23:00:00.000Z")
		)
		expect(token).toEqual(
			"eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ0ZXN0IiwiaWF0IjoxNTgzMTAzNjAwLCJia2QiOiJhYmMuZGVmLmdoaWoiLCJleHAiOjE2NTY2MzM2MDB9.iikemrDgMQjurERVfYSzHRDRJ_WwUN7SF50tNIIudQ2dx-dm5hKLo-JKsdTfSVPcvCc49nHsPQKtMrZmwQx2WQk2VJsyrLglcyHyXlrTnX8DVWwnEhHgeaaipJs0TLslfL5Q2662yesqm0ZzqAcrpKP_q0IC3nTa2wt-iTAlmqIl9vQVTkXi3cJu7qPlmUvFccsg143sl7YImws2tkER3Ofg4p22XcRvLE3nSOErea_qZt6kXiaaene1IENYwjqzY_rGoQ7zc3qZZw985XVJPNBHhwrPJ9BV3EnljJV0NRuOpHXWEk2qPklBDUgfkBMW8Ge4W0kFYOCH9Gjpi7XQKQ"
		)
	})

	it("verify token", async () => {
		// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
		const verifier = model.Key.Verifier.create("test")
		const verification = await verifier.verify(
			"eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ0ZXN0IiwiaWF0IjoxNTgzMTAzNjAwLCJia2QiOiJhYmMuZGVmLmdoaWoiLCJleHAiOjE2NTY2MzM2MDB9.iikemrDgMQjurERVfYSzHRDRJ_WwUN7SF50tNIIudQ2dx-dm5hKLo-JKsdTfSVPcvCc49nHsPQKtMrZmwQx2WQk2VJsyrLglcyHyXlrTnX8DVWwnEhHgeaaipJs0TLslfL5Q2662yesqm0ZzqAcrpKP_q0IC3nTa2wt-iTAlmqIl9vQVTkXi3cJu7qPlmUvFccsg143sl7YImws2tkER3Ofg4p22XcRvLE3nSOErea_qZt6kXiaaene1IENYwjqzY_rGoQ7zc3qZZw985XVJPNBHhwrPJ9BV3EnljJV0NRuOpHXWEk2qPklBDUgfkBMW8Ge4W0kFYOCH9Gjpi7XQKQ"
		)
		expect(verification).toEqual({
			backend: "abc.def.ghij",
			expires: "2022-07-01T00:00:00.000Z",
			issued: "2020-03-01T23:00:00.000Z",
			issuer: "test",
			token:
				"eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ0ZXN0IiwiaWF0IjoxNTgzMTAzNjAwLCJia2QiOiJhYmMuZGVmLmdoaWoiLCJleHAiOjE2NTY2MzM2MDB9.iikemrDgMQjurERVfYSzHRDRJ_WwUN7SF50tNIIudQ2dx-dm5hKLo-JKsdTfSVPcvCc49nHsPQKtMrZmwQx2WQk2VJsyrLglcyHyXlrTnX8DVWwnEhHgeaaipJs0TLslfL5Q2662yesqm0ZzqAcrpKP_q0IC3nTa2wt-iTAlmqIl9vQVTkXi3cJu7qPlmUvFccsg143sl7YImws2tkER3Ofg4p22XcRvLE3nSOErea_qZt6kXiaaene1IENYwjqzY_rGoQ7zc3qZZw985XVJPNBHhwrPJ9BV3EnljJV0NRuOpHXWEk2qPklBDUgfkBMW8Ge4W0kFYOCH9Gjpi7XQKQ",
		})
	})
})
