import { Base as OperationBase } from "./Base"
import { Deposit as OperationDeposit } from "./Deposit"
import { Status as OperationStatus } from "./Status"
import { Type as OperationType } from "./Type"
import { Withdraw as OperationWithdraw } from "./Withdraw"

export type Operation = OperationBase

export namespace Operation {
	export type Base = OperationBase
	export type Deposit = OperationDeposit
	export type Withdraw = OperationWithdraw
	export type Type = OperationType
	export type Status = OperationStatus
}
