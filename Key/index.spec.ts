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
			{ token: "abc.def.ghij", expires: "2021-07-01T00:00:00.000Z" },
			new Date(2020, 2, 2, 0, 0, 0)
		)
		expect(token).toEqual(
			"eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ0ZXN0IiwiaWF0IjoxNTgzMTAzNjAwLCJ0b2tlbiI6ImFiYy5kZWYuZ2hpaiIsImV4cGlyZXMiOiIyMDIxLTA3LTAxVDAwOjAwOjAwLjAwMFoifQ.H25vKbR2_Nx_UVSFDbMpSTwhoTTUDzNiIYjkhkPbJeiHt-aYIv0ayqZ1Hzav8MmlgA5tDROtAJYTxoulJ8PcM1e249ScTspR_8xvjfjI3-kDJXCALwIBXjt_2Ny-JgPZTwkPR0VGdNsdwT4FacNhS7k6-lbU9RC0LmyRoaKtTJlQeGDrpz1TWx1LXE5HLrGNZjo_y3rZUJRDyCMAKaeXGfPlIr7WS9FsTj6jny53x31kb8QUW-NOyhLWd-uwKJgEOgG20lPd4qCp7BPNL7QrGRMAp9yYe7PaKK37GZIxS6HyJCDBaV2JYEtvx3spG4TYcC24wX1gnla56hWjwisk3A"
		)
	})

	it("verify token", async () => {
		// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
		const verifier = model.Key.Verifier.create("test")
		const verification = await verifier.verify(
			"eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ0ZXN0IiwiaWF0IjoxNTgzMTAzNjAwLCJ0b2tlbiI6ImFiYy5kZWYuZ2hpaiIsImV4cGlyZXMiOiIyMDIxLTA3LTAxVDAwOjAwOjAwLjAwMFoifQ.H25vKbR2_Nx_UVSFDbMpSTwhoTTUDzNiIYjkhkPbJeiHt-aYIv0ayqZ1Hzav8MmlgA5tDROtAJYTxoulJ8PcM1e249ScTspR_8xvjfjI3-kDJXCALwIBXjt_2Ny-JgPZTwkPR0VGdNsdwT4FacNhS7k6-lbU9RC0LmyRoaKtTJlQeGDrpz1TWx1LXE5HLrGNZjo_y3rZUJRDyCMAKaeXGfPlIr7WS9FsTj6jny53x31kb8QUW-NOyhLWd-uwKJgEOgG20lPd4qCp7BPNL7QrGRMAp9yYe7PaKK37GZIxS6HyJCDBaV2JYEtvx3spG4TYcC24wX1gnla56hWjwisk3A"
		)
		expect(verification).toEqual({
			token: "abc.def.ghij",
			expires: "2021-07-01T00:00:00.000Z",
			iat: 1583103600,
			iss: "test",
		})
	})
})
