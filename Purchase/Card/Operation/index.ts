import { Approved as OperationApproved } from "./Approved"
import { Authorize as OperationAuthorize } from "./Authorize"
import { Base as OperationBase } from "./Base"
import { Capture as OperationCapture } from "./Capture"
import { Create as OperationCreate } from "./Create"
import { Expire as OperationExpire } from "./Expire"
import { Freeze as OperationFreeze } from "./Freeze"
import { Limit as OperationLimit } from "./Limit"
import { Refund as OperationRefund } from "./Refund"
import { Release as OperationRelease } from "./Release"
import { Status as OperationStatus } from "./Status"
import { Thaw as OperationThaw } from "./Thaw"
import { Type as OperationType } from "./Type"

export type Operation = OperationBase

export namespace Operation {
	export type Authorize = OperationAuthorize
	export type Capture = OperationCapture
	export type Create = OperationCreate
	export type Expire = OperationExpire
	export type Freeze = OperationFreeze
	export type Limit = OperationLimit
	export type Refund = OperationRefund
	export type Release = OperationRelease
	export type Thaw = OperationThaw
	export type Approved = OperationApproved
	export type Base = OperationBase
	export type Status = OperationStatus
	export type Type = OperationType

	export function balanceImpact(value: Operation): { reserved: number; balance: number } | undefined {
		let result: { reserved: number; balance: number }

		// value.status can be "failed", "pending" or "success"
		if (value.status == "failed" || value.status == "pending")
			result = { reserved: 0, balance: 0 }
		else {
			switch (value.type) {
				case "authorize":
					result = { reserved: value.amount, balance: 0 }
					break
				case "capture":
					result = { reserved: -value.amount, balance: -value.amount }
					break
				case "refund":
					result = { reserved: 0, balance: value.amount }
					break
				case "release":
					result = { reserved: -value.amount, balance: 0 }
					break
				default:
					result = { reserved: 0, balance: 0 }
					break
			}

			return result
		}
	}
}
