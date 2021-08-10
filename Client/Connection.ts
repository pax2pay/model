import * as gracely from "gracely"
import * as http from "cloud-http"

export class Connection {
	onError?: (error: gracely.Error, request: http.Request) => Promise<boolean>
	onUnauthorized?: (connection: Connection) => Promise<boolean>
	#key?: string
	get key() {
		return this.#key
	}
	set key(value: string | undefined) {
		this.#key = value
	}
	private constructor(readonly server: string, key?: string) {
		this.#key = key
	}

	private async fetch<Response>(
		path: string,
		method: http.Method,
		body?: any,
		header?: http.Request.Header
	): Promise<Response | gracely.Error> {
		header = {
			contentType: "application/json; charset=utf-8",
			authorization: this.#key ? "Bearer " + this.#key : undefined,
			...header,
		}
		const request = { url: this.server + "/" + path, method, header, body }
		const response = await http.fetch(request).catch(error => console.log(error))
		let result = !response
			? gracely.server.unavailable("Failed to reach server.")
			: response.status == 401 && this.onUnauthorized && (await this.onUnauthorized(this))
			? await this.fetch<Response>(path, method, body)
			: ((await response.body) as Response | gracely.Error)
		if (gracely.Error.is(result) && this.onError && (await this.onError(result, http.Request.create(request))))
			result = await this.fetch(path, method, body, header)
		return result
	}
	async get<Response>(path: string, header?: http.Request.Header): Promise<Response | gracely.Error> {
		return await this.fetch<Response>(path, "GET", undefined, header)
	}
	async post<Response>(path: string, request: any, header?: http.Request.Header): Promise<Response | gracely.Error> {
		return await this.fetch<Response>(path, "POST", request, header)
	}
	async put<Response>(path: string, request: any, header?: http.Request.Header): Promise<Response | gracely.Error> {
		return await this.fetch<Response>(path, "PUT", request, header)
	}
	async patch<Response>(path: string, request: any, header?: http.Request.Header): Promise<Response | gracely.Error> {
		return await this.fetch<Response>(path, "PATCH", request, header)
	}
	async delete<Response>(path: string, header?: http.Request.Header): Promise<Response | gracely.Error> {
		return await this.fetch<Response>(path, "DELETE", undefined, header)
	}
	static create(server: string | undefined, key?: string) {
		return server != undefined ? new Connection(server, key) : undefined
	}
	static async errorToUndefined<T>(body: Promise<T | gracely.Error>): Promise<T | undefined> {
		const b = await body
		return gracely.Error.is(b) ? undefined : b
	}
}