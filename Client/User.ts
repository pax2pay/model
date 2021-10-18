import * as gracely from "gracely"
import { User as modelUser } from "../User"
import { Connection } from "./Connection"

export class User {
	constructor(private readonly connection: Connection) {}
	async list(): Promise<modelUser[] | gracely.Error> {
		return await this.connection.get<modelUser[]>("user")
	}
	async remove(user: string): Promise<modelUser | gracely.Error> {
		return await this.connection.delete<modelUser>(`user/${user}`)
	}
	async update(user: string, request: modelUser.Creatable): Promise<modelUser | gracely.Error> {
		return await this.connection.put<modelUser>(`user/${user}`, request)
	}
}
