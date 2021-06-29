import { Operation } from "./Operation"
import { Status } from "./Status"

export function getStatus(operations: Operation[]): Status {
	let result: Status = {}
	operations.forEach(t => {
		switch (t.type) {
			case "authorize":
				console.log("auth", result.authorized)
				result = {
					...result,
					authorized: (result.authorized ? result.authorized : 0) + (t as Operation.Authorize).amount,
				}
				console.log(result)
				break
			case "capture":
				console.log("capt", result.captured)
				result = {
					...result,
					captured: (result.captured ? result.captured : 0) + (t as Operation.Capture).amount,
				}
				console.log(result)
				break
			case "refund":
				console.log("refu", result.refunded)
				result = {
					...result,
					refunded: (result.refunded ? result.refunded : 0) + (t as Operation.Refund).amount,
				}
				console.log(result)
				break
			case "settle":
				console.log("sett", result.settled)
				result = {
					...result,
					settled: (result.settled ? result.settled : 0) + (t as Operation.Settle).amount,
				}
				console.log(result)
				break
			default:
				result = { ...result }
				break
		}
	})

	return result
}
