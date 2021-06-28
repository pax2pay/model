import * as model from "./index"

describe("@pax2pay/model", () => {
	it("model.Purchase.Card", () => {
		const card: model.Purchase.Card = {
			id: "test1234",
			type: "card",
			reference: { provider: "modulr", id: "1234qwer" },
			organization: { name: "testname", code: "testcode", status: "active" },
			amount: 111,
			currency: "EUR",
			meta: { testkey: "testvalue" },
			operations: [],
		}
		expect(card).toEqual({
			id: "test1234",
			type: "card",
			reference: { provider: "modulr", id: "1234qwer" },
			organization: { name: "testname", code: "testcode", status: "active" },
			amount: 111,
			currency: "EUR",
			meta: { testkey: "testvalue" },
			operations: [],
		})
	})
})
