export type Provider = "conferma" | "ixaris" | "wex" | "fake" | "lodged" | "modulr" | "unknown" | "pax2pay"
export namespace Provider {
	export function is(value: Provider | any): value is Provider {
		return (
			value == "conferma" ||
			value == "ixaris" ||
			value == "wex" ||
			value == "fake" ||
			value == "lodged" ||
			value == "modulr" ||
			value == "unknown" ||
			value == "pax2pay"
		)
	}
}
