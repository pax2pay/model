export type Usage = "single_use" | "multiple_use"

export namespace Usage {
	export function is(value: Usage | any): value is Usage {
		return value == "single_use" || value == "multiple_use"
	}
}
