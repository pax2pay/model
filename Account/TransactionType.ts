const transactionType = [
	"AUTHORISATION",
	"AUTHORISATION_DECLINED",
	"SETTLEMENT",
	"AUTHORISATION_AND_SETTLEMENT",
	"REVERSAL",
	"REFUND",
	"TRANSFER_IN",
	"TRANSFER_OUT",
] as const
export type TransactionType = typeof transactionType[number]

export namespace TransactionType {
	export function is(value: unknown): value is TransactionType {
		return typeof value == "string" && transactionType.includes(value as TransactionType)
	}
}
