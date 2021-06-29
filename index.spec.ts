import * as model from "./index"

describe("@pax2pay/model", () => {
	it("model.Purchase.Card", () => {
		const card: model.Purchase.Card = {
			id: "test1234",
			type: "card",
			reference: { provider: "modulr", id: "1234qwer" },
			organization: { name: "testname", code: "testcode", status: "active" },
			currency: "EUR",
			meta: { testkey: "testvalue" },
			status: { authorized: 100, captured: 50, settled: 50 },
			operations: [],
		}
		expect(card).toEqual({
			id: "test1234",
			type: "card",
			reference: { provider: "modulr", id: "1234qwer" },
			organization: { name: "testname", code: "testcode", status: "active" },
			currency: "EUR",
			meta: { testkey: "testvalue" },
			status: { authorized: 100, captured: 50, settled: 50 },
			operations: [],
		})
	})
})
