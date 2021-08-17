import * as gracely from "gracely"
import * as http from "cloud-http"
import { Account } from "./Account"
import { Connection } from "./Connection"
import { Me } from "./Me"

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
	private constructor(private readonly connection: Connection) {
		this.connection.onUnauthorized = async () => this.onUnauthorized != undefined && (await this.onUnauthorized(this))
	}
	static create(server?: string, key?: string): Client {
		return new Client(Connection.create(server, key))
	}
}
