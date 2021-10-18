import * as gracely from "gracely"
import * as model from "../User"
import { Connection } from "./Connection"

export class User {
	constructor(private readonly connection: Connection) {}
	async list(): Promise<model.User[] | gracely.Error> {
		return await this.connection.get<model.User[]>("user")
	}
	async remove(user: string): Promise<model.User | gracely.Error> {
		return await this.connection.delete<model.User>(`user/${user}`)
	}
	async update(user: model.User.Change): Promise<model.User | gracely.Error> {
		return await this.connection.put<model.User>(`user/${user.user}`, user)
	}
}
