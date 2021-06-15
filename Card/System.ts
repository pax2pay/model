export type System =
	| "portal"
	| "rest_api"
	| "fab"
	| "rest_api_portal"
	| "rest_api_external"
	| "soap_api_fab"
	| "soap_api_external"
	| "cron"
	| "unknown"
	| "undefined"

export namespace System {
	export function is(value: System | any): value is System {
		return (
			value == "portal" ||
			value == "rest_api" ||
			value == "fab" ||
			value == "rest_api_portal" ||
			value == "rest_api_external" ||
			value == "soap_api_fab" ||
			value == "soap_api_external" ||
			value == "cron" ||
			value == "unknown" ||
			value == "undefined"
		)
	}
}
