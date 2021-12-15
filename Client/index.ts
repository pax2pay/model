import * as gracely from "gracely"
import * as http from "cloud-http"
import { Account } from "./Account"
import { Connection as ClientConnection } from "./Connection"
import { Me } from "./Me"
import { User } from "./User"

export class Client {
	set onError(value: ((error: gracely.Error, request: http.Request) => Promise<boolean>) | undefined) {
		this.connection.onError = value
	}
	get onError(): ((error: gracely.Error, request: http.Request) => Promise<boolean>) | undefined {
		return this.connection.onError
	}
	onUnauthorized?: (client: Client) => Promise<boolean>
	set server(value: string | undefined) {
		this.connection.server = value
	}
	get server(): string | undefined {
		return this.connection.server
	}
	set key(value: string | undefined) {
		this.connection.key = value
	}
	get key(): string | undefined {
		return this.connection.key
	}
	readonly me = new Me(this.connection)
	readonly account = new Account(this.connection)
	readonly user = new User(this.connection)
	private constructor(private readonly connection: ClientConnection) {
		this.connection.onUnauthorized = async () => this.onUnauthorized != undefined && (await this.onUnauthorized(this))
	}
	static create<T = void>(server?: string, key?: string, load?: (connection: ClientConnection) => T): Client {
		const connection = ClientConnection.create(server, key)
		const result = new Client(connection)
		if (load)
			Object.assign(result, load(connection))
		return result
	}
}
export namespace Client {
	export const Connection = ClientConnection
	export type Connection = ClientConnection
}
