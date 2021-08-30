import * as gracely from "gracely"
import { User as modelUser } from "../User"
import { Connection } from "./Connection"

export class User {
	constructor(private readonly connection: Connection) {}
	async list(): Promise<modelUser[] | gracely.Error> {
		return await this.connection.get<modelUser[]>("User")
	}
}
