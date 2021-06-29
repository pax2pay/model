import { Status } from "./Status"

export function getAmount(status: Status | undefined): number {
	let result = 0
	if (status) {
		result += status.captured ?? 0
		result -= status.refunded ?? 0
	}

	return result
}
