import { Field as FormatField } from "./Field"

export interface Format {
	readonly name: string
	readonly title: string
	readonly fields: readonly Format.Field[]
	readonly top2?: readonly [string, string?]
	readonly top5?: readonly [string, string?, string?, string?, string?]
}

export namespace Format {
	export type Field = FormatField
}
