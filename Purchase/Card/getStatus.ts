import { Operation } from "./Operation"
import { Status } from "./Status"

export function getStatus(operations: Operation[]): Status {
	let result: Status = {}
	operations.forEach(t => {
		switch (t.type) {
			case "authorize":
				result = {
					...result,
					authorized: (result.authorized ? result.authorized : 0) + (t as Operation.Authorize).amount,
				}

				break
			case "capture":
				result = {
					...result,
					captured: (result.captured ? result.captured : 0) + (t as Operation.Capture).amount,
				}

				break
			case "refund":
				result = {
					...result,
					refunded: (result.refunded ? result.refunded : 0) + (t as Operation.Refund).amount,
				}

				break
			case "settle":
				result = {
					...result,
					settled: (result.settled ? result.settled : 0) + (t as Operation.Settle).amount,
				}

				break
			default:
				result = { ...result }
				break
		}
	})

	return result
}
