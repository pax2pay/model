import * as gracely from "gracely"
import * as rest from "cloudly-rest"
import * as model from "../User"

export class User extends rest.Collection<gracely.Error> {
	async list(): Promise<model.User[] | gracely.Error> {
		return await this.client.get<model.User[]>("user")
	}
	async remove(user: string): Promise<model.User | gracely.Error> {
		return await this.client.delete<model.User>(`user/${user}`)
	}
	async update(user: model.User.Change): Promise<model.User | gracely.Error> {
		return await this.client.put<model.User>(`user/${user.user}`, user)
	}
}
