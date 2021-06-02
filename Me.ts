import { User } from "./User"

export interface Me extends User {
	key: string
}

export namespace Me {
	export function is(value: Me | any) {
		typeof value == "object" && typeof value.key == "string" && User.is(value)
	}
}
