import { Account } from "./Account"
import { Connection } from "./Connection"
import { Me } from "./Me"

export class Client {
	onUnauthorized?: (client: Client) => Promise<boolean>
	readonly me = new Me(this.connection)
	readonly account = new Account(this.connection)
	private constructor(private readonly connection: Connection) {
		this.connection.onUnauthorized = async () => this.onUnauthorized != undefined && (await this.onUnauthorized(this))
	}
	static create(server?: string, key?: string): Client {
		return new Client(Connection.create(server, key))
	}
}
